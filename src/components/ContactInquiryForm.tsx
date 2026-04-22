"use client";

import { FormEvent, useMemo, useState } from "react";

type InquiryType =
  | "mentorship"
  | "therapy"
  | "workshop"
  | "healing-session"
  | "other";

type SubmitState = "idle" | "sending-email" | "email-sent" | "email-error";

const inquiryOptions: Array<{ value: InquiryType; label: string }> = [
  { value: "mentorship", label: "Mentorship Program" },
  { value: "therapy", label: "Therapy Program" },
  { value: "workshop", label: "Workshop / Group Session" },
  { value: "healing-session", label: "Personalized Healing Session" },
  { value: "other", label: "Something Else" }
];

function normalizeWhatsAppNumber(value?: string) {
  const digits = value?.replace(/\D/g, "") ?? "";

  if (!digits) {
    return null;
  }

  if (digits.length === 10 && /^[6-9]\d{9}$/.test(digits)) {
    return `91${digits}`;
  }

  if (digits.length >= 11 && digits.length <= 15) {
    return digits;
  }

  return null;
}

export function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [inquiryType, setInquiryType] = useState<InquiryType>("mentorship");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const whatsappNumber = normalizeWhatsAppNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  );
  const selectedInquiryLabel =
    inquiryOptions.find((item) => item.value === inquiryType)?.label ?? inquiryType;

  const inquiryPayload = useMemo(
    () =>
      [
        "Hello Dr. Devanu, I would like to enquire through the website form.",
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Phone: ${phone || "-"}`,
        `Interest: ${selectedInquiryLabel}`,
        `Message: ${message || "-"}`
      ].join("\n"),
    [email, message, name, phone, selectedInquiryLabel]
  );

  const whatsappHref = useMemo(() => {
    if (!whatsappNumber) {
      return null;
    }

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiryPayload)}`;
  }, [inquiryPayload, whatsappNumber]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+91 \d{10}$/.test(phone)) {
      newErrors.phone =
        "Phone number must be in the format +91 followed by 10 digits.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetFeedback = () => {
    setErrors({});
    setSubmitState("idle");
    setSubmitMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (whatsappHref) {
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
      return;
    }

    void handleEmailSubmit();
  };

  const handleEmailSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setSubmitState("sending-email");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          inquiryType: selectedInquiryLabel,
          message: message.trim()
        })
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string; success?: boolean }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.error ??
            "The inquiry could not be sent right now. Please try WhatsApp instead."
        );
      }

      setSubmitState("email-sent");
      setSubmitMessage(
        "Your inquiry has been sent successfully. Dr. Devanu's team will get back to you soon."
      );
    } catch (error) {
      setSubmitState("email-error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "The inquiry could not be sent right now. Please try WhatsApp instead."
      );
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    resetFeedback();
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    resetFeedback();
  };

  const handlePhoneChange = (value: string) => {
    if (value.startsWith("+91 ")) {
      const digits = value.slice(4).replace(/\D/g, "").slice(0, 10);
      setPhone(`+91 ${digits}`);
    } else {
      setPhone("+91 ");
    }

    resetFeedback();
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
    resetFeedback();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
            Your Name
          </span>
          <input
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
            placeholder="Drishti Sharma"
            className="mt-3 w-full border-0 bg-transparent p-0 text-sm text-ink outline-none placeholder:text-ink/28"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          ) : null}
        </label>

        <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
            Email Address
          </span>
          <input
            type="email"
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
            placeholder="you@example.com"
            className="mt-3 w-full border-0 bg-transparent p-0 text-sm text-ink outline-none placeholder:text-ink/28"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          ) : null}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
        <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
            Phone / WhatsApp
          </span>
          <input
            value={phone}
            onChange={(event) => handlePhoneChange(event.target.value)}
            placeholder="+91 XXXXX XXXXX"
            className="mt-3 w-full border-0 bg-transparent p-0 text-sm text-ink outline-none placeholder:text-ink/28"
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          ) : null}
        </label>

        <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
            What are you interested in?
          </span>
          <select
            value={inquiryType}
            onChange={(event) => {
              setInquiryType(event.target.value as InquiryType);
              resetFeedback();
            }}
            className="mt-3 w-full border-0 bg-transparent p-0 text-sm text-ink outline-none"
          >
            {inquiryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
          Tell us a little about your need
        </span>
        <textarea
          value={message}
          onChange={(event) => handleMessageChange(event.target.value)}
          placeholder="Share what you are moving through, what kind of support you are seeking, or which program you want to explore."
          rows={6}
          className="mt-3 w-full resize-none border-0 bg-transparent p-0 text-sm leading-7 text-ink outline-none placeholder:text-ink/28"
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        ) : null}
      </label>

      <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm leading-7 text-ink/56">
            Sending this inquiry opens WhatsApp with your message.
          </p>
          <p className="text-sm leading-7 text-ink/56">
            Prefer email instead? The website can send it directly for you.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2">
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-plum px-7 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(107,91,149,0.24)] transition duration-300 hover:bg-plum-light"
          >
            Send Inquiry
          </button>
          <button
            type="button"
            onClick={() => void handleEmailSubmit()}
            disabled={submitState === "sending-email"}
            className="text-sm font-medium text-ink/58 underline decoration-ink/20 underline-offset-4 transition duration-300 hover:text-plum hover:decoration-plum/35 disabled:cursor-not-allowed disabled:text-ink/38"
          >
            {submitState === "sending-email"
              ? "Sending email..."
              : "Prefer email instead?"}
          </button>
        </div>
      </div>

      {submitState === "email-sent" ? (
        <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50/90 px-5 py-4 text-sm leading-7 text-emerald-800">
          {submitMessage}
        </div>
      ) : null}

      {submitState === "email-error" ? (
        <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50/90 px-5 py-4 text-sm leading-7 text-amber-900">
          {submitMessage}
        </div>
      ) : null}
    </form>
  );
}
