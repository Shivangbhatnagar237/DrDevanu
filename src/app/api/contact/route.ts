import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json(
      { error: "The inquiry details could not be read." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const inquiryType = body.inquiryType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !message || !inquiryType) {
    return NextResponse.json(
      { error: "Please complete all form fields before sending." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Dr Devanu <onboarding@resend.dev>";

  if (!apiKey || !recipient) {
    return NextResponse.json(
      {
        error:
          "The email channel is not configured yet. Please try WhatsApp for now."
      },
      { status: 503 }
    );
  }

  const text = [
    "New inquiry from drdevanu.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Interest: ${inquiryType}`,
    "",
    "Message:",
    message
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f1a1f; line-height: 1.7;">
      <h2 style="margin-bottom: 16px;">New inquiry from drdevanu.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interest:</strong> ${inquiryType}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipient],
      reply_to: email,
      subject: `New ${inquiryType} inquiry from ${name}`,
      text,
      html
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text().catch(() => "");

    return NextResponse.json(
      {
        error:
          errorText || "The inquiry could not be sent right now. Please try again."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
