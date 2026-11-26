import Image from "next/image";
import { CallToAction, Footer } from "@/components/footer";
import {
  Differences,
  MoreAbout,
  Stats,
  Testimonials,
} from "@/components/sections";
import { Button, Eyebrow } from "@/components/ui";
import { callUrl, field, whatsappUrl } from "@/lib/copy";
import { seo } from "@/lib/seo";

export const metadata = seo("About Us", field("2.5", "Body Copy"), "/about");

export default function About() {
  return (
    <>
      <main id="main">
        <section className="section">
          <div className="container grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>About Us</Eyebrow>
              <h1 className="text-[clamp(2.7rem,4.8vw,4.8rem)]">
                {field("4.2", "Main H2 Headline")}
              </h1>
              <p className="mt-8 text-lg">
                {field("4.2", "Opening Salutation")}
              </p>
              <div className="mt-8">
                <Button href={callUrl}>Book a Free Discovery Call</Button>
              </div>
            </div>
            <Image
              src="/images/founder.jpg"
              width={584}
              height={730}
              alt="Deh Chukwuka, founder of SLiQWriterS"
              priority
              className="w-full"
              sizes="(max-width: 1024px) 90vw, 550px"
            />
          </div>
        </section>
        <div className="container border-y border-line py-12">
          <Stats />
        </div>
        <section className="section">
          <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <div>
              <Eyebrow>Who We Are</Eyebrow>
              <h2>Our History</h2>
            </div>
            <div className="space-y-6 text-muted">
              {Array.from({ length: 13 }, (_, i) => (
                <p key={i}>{field("4.2", `Paragraph ${i + 1}`)}</p>
              ))}
              <p className="border-l-4 border-yellow pl-6 text-xl font-medium text-ink">
                {field("4.2", "Closing Statement")}
              </p>
              <div className="pt-4">
                <Button href={whatsappUrl} dark>
                  Chat with us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <MoreAbout />
        <Differences />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
