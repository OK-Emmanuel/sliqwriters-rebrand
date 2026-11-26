"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="container py-28">
      <h1 className="text-4xl">Unable to load this page</h1>
      <p className="my-8">
        Please try again or contact{" "}
        <a href="mailto:hello@sliqwriters.com" className="underline">
          hello@sliqwriters.com
        </a>
        .
      </p>
      <button type="button" className="button button-dark" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
