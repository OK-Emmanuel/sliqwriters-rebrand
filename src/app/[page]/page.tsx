import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CallToAction, Footer } from "@/components/footer";
import { Accordion, Button, Eyebrow, PageHero, Rich } from "@/components/ui";
import {
  callUrl,
  clean,
  deliverables,
  faq,
  field,
  fields,
  quotedBullets,
  section,
  whatsappUrl,
} from "@/lib/copy";
import { servicePages } from "@/lib/services";
import { seo } from "@/lib/seo";

const pages = [
  ...Object.keys(servicePages),
  "branding",
  "mentorship",
  "founder",
  "faq",
];
export function generateStaticParams() {
  return pages.map((page) => ({ page }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (!pages.includes(page)) notFound();
  const service = servicePages[page as keyof typeof servicePages];
  const titles: Record<string, string> = {
    branding: "Branding",
    mentorship: "Coaching/Mentorship",
    founder: "The Founder",
    faq: "Frequently Asked Question",
  };
  return seo(
    service?.title ?? titles[page],
    service ? field(`${service.id}.2`, "H1 Title") : field("2.5", "Body Copy"),
    `/${page}`,
  );
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (!pages.includes(page)) notFound();
  const service = servicePages[page as keyof typeof servicePages];
  let content;
  if (service) {
    const id = service.id;
    const body = quotedBullets(`${id}.2`).map((paragraph) =>
      paragraph.replace(/^## /, ""),
    );
    if (page === "linkedin-growth") {
      const index = body.findIndex((paragraph) =>
        paragraph.startsWith("If your LinkedIn"),
      );
      body.splice(
        index + 1,
        0,
        "- **No leads**\n- **No clients/sales**\n- **No authority**",
      );
    }
    content = (
      <>
        <PageHero
          eyebrow={field(`${id}.1`, "Breadcrumb Title")}
          title={field(`${id}.2`, "H1 Title")}
        />
        <section className="section">
          <div className="container grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <aside>
              <Eyebrow>All Services</Eyebrow>
              <nav className="grid divide-y divide-line border-y border-line">
                {[
                  ["Growthwright™ (Marketing)", "/growthwright"],
                  ["Voicewright™ (LinkedIn Growth)", "/voicewright"],
                  ["Copywriting", "/copywriting"],
                ].map(([title, href]) => (
                  <Link className="py-5 text-sm" key={href} href={href}>
                    {title} ↗
                  </Link>
                ))}
              </nav>
              <div className="mt-8">
                <Button href={callUrl}>{service.cta}</Button>
              </div>
            </aside>
            <div>
              <Rich>{body.join("\n\n")}</Rich>
              <h2 className="mt-14 mb-8">What&apos;s Included</h2>
              <Accordion items={deliverables(`${id}.3`)} />
              <div className="mt-10">
                <Button href={whatsappUrl} dark>
                  Chat with us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else if (page === "faq") {
    content = (
      <>
        <PageHero eyebrow="FAQ" title="Frequently Asked Question" />
        <section className="section">
          <div className="container max-w-4xl">
            <Accordion items={faq("16.2")} />
          </div>
        </section>
      </>
    );
  } else if (page === "branding") {
    const pillars = deliverables("12.3");
    const expectations = [
      ...section("12.4").matchAll(/^\* \*\*\d+\. (.+?):\*\* "(.+)"/gm),
    ].map((match) => ({ question: match[1], answer: match[2] }));
    content = (
      <>
        <PageHero
          eyebrow={field("12.1", "Breadcrumb Title")}
          title={field("12.2", "H1 Title")}
        />
        <section className="section">
          <div className="container grid gap-14 lg:grid-cols-2">
            <Rich>
              {["Opening Hook", "Core Principle", "Agency Promise"]
                .map((label) => field("12.2", label))
                .join("\n\n")}
            </Rich>
            <Accordion items={pillars} />
          </div>
        </section>
        <section className="section bg-white">
          <div className="container two-col grid gap-12 lg:grid-cols-2">
            <h2>{field("12.4", "Header")}</h2>
            <Accordion items={expectations} />
          </div>
        </section>
      </>
    );
  } else if (page === "mentorship") {
    content = (
      <>
        <PageHero
          eyebrow={field("13.1", "Breadcrumb Title")}
          title={field("13.2", "H1 Title")}
        />
        <section className="section">
          <div className="container grid gap-8 md:grid-cols-2">
            {fields("13.2", "Headline").map((title, i) => (
              <article className="service-card bg-white" key={title}>
                <Eyebrow>0{i + 1}</Eyebrow>
                <h2>{title}</h2>
                <p className="my-8 text-muted">{fields("13.2", "Body")[i]}</p>
                <Button
                  href={
                    i === 0
                      ? "https://www.coachli.co/dehchukwuka/products/details?slug=mini-coaching-mentorship&productId=156"
                      : "https://coachli.co/dehchukwuka"
                  }
                >
                  Learn More
                </Button>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  } else {
    const bio = [
      field("5.3", "Paragraph 1"),
      field("5.3", "Paragraph 2"),
      field("5.3", "Paragraph 3"),
      field("5.3", "For Clients"),
      field("5.3", "For Writers"),
      field("5.3", "Paragraph 4"),
      field("5.3", "Paragraph 5"),
      field("5.3", "Personal Touch"),
    ];
    content = (
      <>
        <PageHero
          eyebrow="The Founder"
          title={field("5.2", "Full Name & Pseudonym")}
          description={field("5.2", "Professional Title")}
        />
        <section className="section">
          <div className="container grid items-start gap-14 lg:grid-cols-[1fr_1.5fr]">
            <Image
              src="/images/founder.jpg"
              width={584}
              height={730}
              alt="Deh Chukwuka"
              sizes="(max-width: 1024px) 90vw, 500px"
            />
            <div>
              <h2 className="mb-8">Biography</h2>
              <Rich>{bio.join("\n\n")}</Rich>
              <div className="mt-10 flex flex-wrap gap-6">
                {fields("5.4", "Metric 1")
                  .concat(fields("5.4", "Metric 2"), fields("5.4", "Metric 3"))
                  .map((metric) => (
                    <Rich key={metric}>{clean(metric)}</Rich>
                  ))}
              </div>
              <div className="mt-10">
                <Button href="https://www.linkedin.com/in/dehchukwuka/">
                  LinkedIn ↗
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <main id="main">
        {content}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
