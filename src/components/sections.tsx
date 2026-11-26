import Image from "next/image";
import Link from "next/link";
import { callUrl, field, fields, section, stats } from "@/lib/copy";
import { Arrow, Button, Eyebrow, Rich } from "./ui";

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
      {stats.map(([value, label]) => (
        <div className="stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function ServiceOffers() {
  const titles = fields("2.9", "Heading");
  const subtitles = fields("2.9", "Subheading");
  const descriptions = fields("2.9", "Body");
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {titles.map((title, index) => (
        <article
          className={`service-card ${index === 0 ? "bg-yellow/15" : "bg-white"}`}
          key={title}
        >
          <div className="mb-12 flex justify-between">
            <span className="text-xs">0{index + 1}</span>
            <Arrow className="size-8" />
          </div>
          <h3>{title}</h3>
          <p className="mt-3 text-xs">{subtitles[index]}</p>
          <Rich>{descriptions[index]}</Rich>
          <Link
            href={index === 0 ? "/growthwright" : "/voicewright"}
            className="text-link"
          >
            Read More<span className="sr-only">: {title}</span> <Arrow />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function Process() {
  const steps = [...section("2.3").matchAll(/^\s+\d+\. "(.+)"/gm)].map(
    (match) => match[1],
  );
  return (
    <section className="section bg-ink text-white">
      <div className="container">
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <div>
            <Eyebrow>How We Work</Eyebrow>
            <h2>{field("2.3", "Section Headline")}</h2>
          </div>
          <p className="max-w-lg text-white/60">
            {field("2.3", "Section Subheadline")}
          </p>
        </div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li className="border-t border-white/25 pt-6" key={step}>
              <span className="mb-9 block font-serif text-4xl italic text-yellow">
                0{i + 1}
              </span>
              <p className="text-sm text-white/80">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FounderIntro() {
  return (
    <section className="section">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <Image
            src="/images/founder.jpg"
            alt="Deh Chukwuka, founder of SLiQWriterS"
            width={584}
            height={730}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 90vw, 550px"
          />
          <div className="absolute right-0 bottom-0 bg-yellow px-6 py-4 text-xs font-semibold">
            Deh Chukwuka (SLiQ)
          </div>
        </div>
        <div>
          <Eyebrow>{field("2.5", "Eyebrow Label")}</Eyebrow>
          <h2>{field("2.5", "Section Headline")}</h2>
          <p className="mt-7 mb-9 text-muted">{field("2.5", "Body Copy")}</p>
          <Button href="/about">More About Deh</Button>
          <p className="mt-8 border-t border-line pt-5 text-xs text-muted">
            {field("2.5", "Caption Under Image")}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Differences() {
  const titles = fields("2.4", "Title");
  const descriptions = fields("2.4", "Description");
  return (
    <section className="section border-y border-line bg-white">
      <div className="container">
        <Eyebrow>{field("2.4", "Section Title")}</Eyebrow>
        <h2 className="mb-16 max-w-3xl">{field("2.4", "Section Subtitle")}</h2>
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {titles.map((title, i) => (
            <article key={title} className="border-t border-line pt-6">
              <p className="mb-8 text-xs text-muted">0{i + 1}</p>
              <h3>{title}</h3>
              <p className="mt-4 text-sm text-muted">{descriptions[i]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoreAbout() {
  const narrative = [...section("2.6").matchAll(/^\s+\* "(.+)"/gm)]
    .slice(0, 3)
    .map((match) => match[1]);
  const titles = fields("2.6", "Title");
  const bodies = fields("2.6", "Body");
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>{field("2.6", "Eyebrow Label")}</Eyebrow>
            <h2>{field("2.6", "Section Headline")}</h2>
          </div>
          <Rich className="text-muted">{narrative.join("\n\n")}</Rich>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <article className="border-t-2 border-yellow pt-6">
            <h3>{titles[0]}</h3>
            <Rich className="mt-5 text-sm text-muted">{`${field("2.6", "Paragraph 1")}\n\n${field("2.6", "Paragraph 2")}`}</Rich>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Establish unbreakable relationship with your customers</li>
              <li>Scale your business to be the best in your industry</li>
            </ul>
          </article>
          {bodies.map((body, i) => (
            <article key={body} className="border-t-2 border-ink pt-6">
              <h3>{titles[i + 1]}</h3>
              <p className="mt-5 text-sm text-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    ...section("2.7").matchAll(
      /^\s+\d+\. \*\*(.+?)\*\* — \*(.+?)\*\s*\n\s*\* \*"(.+)"\*/gm,
    ),
  ];
  return (
    <section className="section bg-[#eeeee6]">
      <div className="container">
        <Eyebrow>Results Speak</Eyebrow>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2>Customer Feedbacks</h2>
          <p className="max-w-sm text-sm text-muted">
            Take a look at what some of our top clients say about us
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <figure
              className={`border border-line p-8 ${index === 0 ? "bg-yellow md:col-span-2 lg:col-span-1" : "bg-paper"}`}
              key={review[1]}
            >
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none"
              >
                “
              </span>
              <blockquote className="mt-4 mb-8 text-base leading-8">
                {review[3]}
              </blockquote>
              <figcaption className="border-t border-ink/15 pt-5">
                <strong className="text-xs">{review[1]}</strong>
                <span
                  className={`mt-2 block text-[11px] ${index === 0 ? "text-ink" : "text-muted"}`}
                >
                  {review[2]}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10">
          <Button href={callUrl} dark>
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
