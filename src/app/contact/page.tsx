import { InquiryForm } from "@/components/forms";
import { Footer } from "@/components/footer";
import { Button, Eyebrow, PageHero } from "@/components/ui";
import { callUrl, field, whatsappUrl } from "@/lib/copy";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Contact Us",
  field("2.2", "Callout Body Copy"),
  "/contact",
);

export default function Contact() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="Contact Us"
          title={field("2.2", "Callout Headline")}
        />
        <section className="section">
          <div className="container grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <Eyebrow>Contact Us</Eyebrow>
              <h2>Get In Touch</h2>
              <p className="mt-6 text-muted">
                {field("2.2", "Callout Body Copy")}
              </p>
              <div className="mt-8">
                <Button href={callUrl}>Book Your Free Strategy Call</Button>
              </div>
              <dl className="mt-12 space-y-7 border-t border-line pt-8">
                <div>
                  <dt className="text-xs text-muted">Mail Address:</dt>
                  <dd className="mt-2 text-lg">
                    <a href="mailto:hello@sliqwriters.com">
                      hello@sliqwriters.com ↗
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Call Us Any Time:</dt>
                  <dd className="mt-2">
                    <a href="tel:+2348133720549">+(234)-813-372-0549</a>
                    <br />
                    <a href="tel:+2348123796553">+234-812-379-6553</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Office Address:</dt>
                  <dd className="mt-2">Nigeria.</dd>
                </div>
              </dl>
              <a className="text-link mt-8" href={whatsappUrl}>
                Chat With Us ↗
              </a>
            </div>
            <div className="border border-line bg-white p-7 lg:p-12">
              <h2 className="text-3xl">Get a quote</h2>
              <p className="mt-3 mb-9 text-sm text-muted">
                get a quotation for your project
              </p>
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
