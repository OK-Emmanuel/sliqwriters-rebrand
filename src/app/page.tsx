import Image from "next/image";
import { Footer, CallToAction } from "@/components/footer";
import {
  Differences,
  FounderIntro,
  MoreAbout,
  Process,
  ServiceOffers,
  Stats,
  Testimonials,
} from "@/components/sections";
import { Arrow, Button, Eyebrow } from "@/components/ui";
import { callUrl, field } from "@/lib/copy";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "SLiQWriterS - copywriting, marketing, linkedin growth & coaching",
  field("3.1", "Meta Description"),
  "/",
);

export default function Home() {
  return (
    <>
      <main id="main">
        <section className="pt-12 lg:pt-18">
          <div className="container">
            <div className="grid items-center gap-10 pb-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
              <div>
                <Eyebrow>Copywriting and Marketing Agency. Since 2017</Eyebrow>
                <h1 className="max-w-3xl">
                  We make businesses{" "}
                  <span className="relative inline bg-yellow px-1">
                    impossible
                  </span>{" "}
                  to ignore.
                </h1>
                <p className="mt-8 max-w-md text-sm text-muted">
                  Focused on Growth. Focused on Visibility. Focused on Sales.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button href="/services" dark>
                    Our Services
                  </Button>
                  <Button href={callUrl} outline>
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-xl">
                <div className="relative aspect-[.94] overflow-hidden bg-[#e7e6e2]">
                  <Image
                    src="/images/brand.jpg"
                    alt="The yellow SLiQWriterS brand mark in a gallery"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4 bg-ink px-5 py-4 text-white">
                    <span className="text-[10px] font-semibold tracking-[.12em] uppercase">
                      Real thinking. Meaningful results.
                    </span>
                    <Arrow className="shrink-0 text-yellow" />
                  </div>
                </div>
                <span
                  className="absolute -top-4 -right-3 flex size-20 items-center justify-center rounded-full border-7 border-paper bg-yellow text-3xl"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </div>
            <div className="border-t border-line py-12">
              <Stats />
            </div>
          </div>
        </section>
        <section className="section border-t border-line bg-white">
          <div className="container grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <Eyebrow>We make businesses impossible to ignore.</Eyebrow>
              <h2>{field("3.3", "H2 Headline")}</h2>
            </div>
            <div className="space-y-6 text-muted">
              {[1, 2, 3].map((n) => (
                <p key={n}>{field("3.3", `Paragraph ${n}`)}</p>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>How we can help you</Eyebrow>
                <h2>Our Services</h2>
              </div>
              <p className="max-w-md text-sm text-muted">
                {field("6.1", "Section Introduction")}
              </p>
            </div>
            <ServiceOffers />
          </div>
        </section>
        <Process />
        <FounderIntro />
        <Differences />
        <MoreAbout />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
