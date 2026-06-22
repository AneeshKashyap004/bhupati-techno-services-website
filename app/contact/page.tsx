import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Motion";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Bhupati Techno Services in Ganganagar, Bangalore for IT infrastructure, cybersecurity, cloud solutions, managed IT services, and IT consulting.",
  path: "/contact",
  keywords: ["contact IT company Bangalore", "Bhupati Techno Services address"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a practical technology consultation."
        description="Reach our Bangalore team for infrastructure, cybersecurity, cloud, managed IT, and consulting support."
      />
      <section className="section-shell bg-white py-20">
        <div className="container-enterprise grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Get In Touch"
              title="Tell us where your infrastructure needs to be stronger."
              description="Reach out for cybersecurity services, managed IT services, cloud solutions, IT consulting, or network implementation in Bangalore."
            />
            <ContactDetails />
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <section id="map" className="section-shell bg-brand-light py-20">
        <div className="container-enterprise">
          <Reveal>
            <div className="premium-card rounded-xl bg-white p-6 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Visit Our Office</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-brand-gray">{site.location}</p>
                </div>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-ripple inline-flex shrink-0 items-center justify-center rounded-md bg-brand-orange px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#c45f21]"
                >
                  Open in Google Maps
                </a>
              </div>
              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  title="Bhupati Techno Services office location on Google Maps"
                  src={site.mapsEmbedUrl}
                  className="min-h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
