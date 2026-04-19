import { MessageCircleMore, Sparkles, Waves } from "lucide-react";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const contactSignals = [
  "For mentorship pathways and long-form healing journeys",
  "For therapy-related guidance and emotional support inquiries",
  "For workshops, collaborations, and group session requests"
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sanctuary">
      <Navbar theme="dark" />

      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(107,91,149,0.16),transparent_48%),radial-gradient(circle_at_top_right,rgba(253,252,231,0.95),transparent_44%)]" />
        <div className="luxury-container relative grid gap-8 pb-16 md:grid-cols-[0.88fr_1.12fr] md:pb-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-plum">
              Contact Us
            </p>
            <h1 className="max-w-[10ch] font-serif text-5xl leading-[0.98] text-ink md:text-7xl">
              Begin the conversation with clarity and calm.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink/68 md:text-lg">
              This contact experience takes inspiration from bold, modern intake
              forms while staying rooted in Dr. Devanu&apos;s softer sanctuary-led
              aesthetic. Use it to enquire about mentorship, therapy, workshops,
              or a personalized healing session.
            </p>

            <div className="mt-8 space-y-3">
              {contactSignals.map((signal, index) => (
                <div
                  key={signal}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-ink/8 bg-white/72 px-5 py-4 shadow-[0_12px_35px_rgba(26,26,26,0.05)] backdrop-blur-xl"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum/12 font-serif text-lg text-plum">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7 text-ink/64">{signal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-plum/12 blur-2xl md:block" />
            <div className="absolute -right-4 bottom-12 hidden h-32 w-32 rounded-full bg-honey blur-2xl md:block" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.80))] p-5 shadow-[0_30px_90px_rgba(45,45,45,0.10)] backdrop-blur-2xl md:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] bg-charcoal px-5 py-4 text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/46">
                    Inquiry Form
                  </p>
                  <p className="mt-2 font-serif text-2xl leading-none">
                    Contact Dr. Devanu
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/72">
                  <MessageCircleMore className="h-4 w-4 stroke-[1.5]" aria-hidden="true" />
                  WhatsApp-ready
                </div>
              </div>

              <ContactInquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="luxury-container grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-mist/90 p-8 shadow-[0_20px_60px_rgba(45,45,45,0.06)]">
            <Sparkles className="h-9 w-9 text-plum" aria-hidden="true" />
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
              Mentorship
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink/64">
              Best when someone wants an ongoing guidance structure, spiritual
              discipline, and developmental support over time.
            </p>
          </div>

          <div className="rounded-[2rem] bg-mist p-8 shadow-[0_20px_60px_rgba(45,45,45,0.06)]">
            <Waves className="h-9 w-9 text-plum" aria-hidden="true" />
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
              Therapy
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink/64">
              Best when someone is navigating emotional distress, relational
              strain, trauma residue, or a specific healing challenge.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(45,45,45,0.06)]">
            <MessageCircleMore className="h-9 w-9 text-plum" aria-hidden="true" />
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
              Workshops
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink/64">
              Best for shorter-format sessions, group learning, practical tools,
              and collaborative program or event requests.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
