"use client";

import { FormEvent, useMemo, useState } from "react";

type InquiryType = "mentorship" | "therapy" | "workshop" | "healing-session" | "other";

const inquiryOptions: Array<{ value: InquiryType; label: string }> = [
  { value: "mentorship", label: "Mentorship Program" },
  { value: "therapy", label: "Therapy Program" },
  { value: "workshop", label: "Workshop / Group Session" },
  { value: "healing-session", label: "Personalized Healing Session" },
  { value: "other", label: "Something Else" }
];

export function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>("mentorship");
  const [message, setMessage] = useState("");

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const whatsappHref = useMemo(() => {
    if (!whatsappNumber) {
      return null;
    }

    const payload = [
      "Hello Dr. Devanu, I would like to enquire through the website form.",
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Interest: ${inquiryOptions.find((item) => item.value === inquiryType)?.label ?? inquiryType}`,
      `Message: ${message || "-"}`
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(payload)}`;
  }, [email, inquiryType, message, name, phone, whatsappNumber]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (whatsappHref) {
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
      return;
    }

    if (contactEmail) {
      const subject = encodeURIComponent("Inquiry from Dr. Devanu website");
      const body = encodeURIComponent(
        [
          `Name: ${name || "-"}`,
          `Email: ${email || "-"}`,
          `Phone: ${phone || "-"}`,
          `Interest: ${inquiryOptions.find((item) => item.value === inquiryType)?.label ?? inquiryType}`,
          "",
          message || "-"
        ].join("\n")
      );

      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    }
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
            onChange={(event) => setName(event.target.value)}
            placeholder="Drishti Sharma"
            className="mt-3 w-full border-0 bg-transparent p-0 text-sm text-ink outline-none placeholder:text-ink/28"
          />
        </label>

        <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
            Email Address
          </span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-3 w-full border-0 bg-transparent p-0 text-sm text-ink outline-none placeholder:text-ink/28"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
        <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
            Phone / WhatsApp
          </span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+91 XXXXX XXXXX"
            className="mt-3 w-full border-0 bg-transparent p-0 text-sm text-ink outline-none placeholder:text-ink/28"
          />
        </label>

        <label className="group rounded-[1.75rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.06)] transition duration-300 focus-within:border-plum/35 focus-within:shadow-[0_18px_50px_rgba(107,91,149,0.12)]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/46">
            What are you interested in?
          </span>
          <select
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value as InquiryType)}
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
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Share what you are moving through, what kind of support you are seeking, or which program you want to explore."
          rows={6}
          className="mt-3 w-full resize-none border-0 bg-transparent p-0 text-sm leading-7 text-ink outline-none placeholder:text-ink/28"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-sm leading-7 text-ink/56">
          Submitting this form can open a prefilled WhatsApp Business message.
          If WhatsApp is not configured yet, it will fall back to email when
          a contact email is added.
        </p>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-plum px-7 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(107,91,149,0.24)] transition duration-300 hover:bg-plum-light"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
