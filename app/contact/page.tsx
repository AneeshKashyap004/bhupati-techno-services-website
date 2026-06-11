import type { Metadata } from "next";
import { CalendarClock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bhupati Techno Services for IT infrastructure services, cybersecurity, cloud solutions, managed IT services, and IT consulting in Bangalore.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-enterprise-gradient pt-32 text-white">
        <div className="container-enterprise py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Contact</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-extrabold leading-tight md:text-7xl">
            Start with a practical technology consultation.
          </h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-enterprise grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Get In Touch"
              title="Tell us where your infrastructure needs to be stronger."
              description="Reach out for cybersecurity services, managed IT services, cloud solutions, IT consulting, or network implementation in Bangalore."
            />
            <div className="mt-8 grid gap-4">
              {[
                [Phone, site.phone, `tel:${site.phone}`],
                [Mail, site.email, `mailto:${site.email}`],
                [MapPin, site.location, "#map"],
                [MessageCircle, "WhatsApp Consultation", site.whatsapp],
                [CalendarClock, "Book on Calendly", site.calendly],
              ].map(([Icon, label, href]) => (
                <Link key={String(label)} href={String(href)} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-brand-light p-4 font-bold text-brand-dark">
                  <Icon className="text-brand-orange" aria-hidden />
                  {String(label)}
                </Link>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section id="map" className="bg-brand-light py-20">
        <div className="container-enterprise">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Google Maps</h2>
            <div className="mt-5 grid min-h-80 place-items-center rounded-lg bg-light-radial text-center">
              <p className="max-w-md font-semibold text-brand-gray">
                Embed the verified Google Maps iframe for the Bangalore office here before production launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
