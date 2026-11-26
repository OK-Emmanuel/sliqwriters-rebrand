"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./ui";

export function InquiryForm({ newsletter = false }: { newsletter?: boolean }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setBusy(true);
    setStatus("");
    setFailed(false);
    try {
      const data = Object.fromEntries(new FormData(form));
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          kind: newsletter ? "newsletter" : "contact",
        }),
      });
      const result: unknown = await response.json();
      if (
        typeof result !== "object" ||
        result === null ||
        !("message" in result) ||
        typeof result.message !== "string"
      )
        throw new Error(
          "Unexpected response. Please contact hello@sliqwriters.com.",
        );
      if (!response.ok) throw new Error(result.message);
      setStatus(result.message);
      form.reset();
    } catch (error) {
      setFailed(true);
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send. Please contact hello@sliqwriters.com.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form
      onSubmit={submit}
      className={`inquiry-form ${newsletter ? "newsletter-form" : ""}`}
    >
      <div
        className={
          newsletter ? "grid gap-4 sm:grid-cols-2" : "grid gap-6 sm:grid-cols-2"
        }
      >
        <label>
          {newsletter ? "Name" : "Your Name"}
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={120}
            placeholder={newsletter ? "Name" : "Your Name"}
          />
        </label>
        <label>
          Email Address
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            placeholder="Email Address"
          />
        </label>
        {!newsletter && (
          <>
            <label className="sm:col-span-2">
              Phone Number
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                maxLength={40}
                placeholder="Phone Number"
              />
            </label>
            <label className="sm:col-span-2">
              Your Message
              <textarea
                required
                name="message"
                minLength={10}
                maxLength={10000}
                rows={5}
                placeholder="Your Message"
              />
            </label>
          </>
        )}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        type="submit"
        disabled={busy}
        className={`button mt-6 ${newsletter ? "button-yellow" : "button-dark"}`}
      >
        {busy ? "Sending..." : newsletter ? "Subscribe" : "Send Message"}
        <Arrow />
      </button>
      <p
        role={failed ? "alert" : "status"}
        aria-live="polite"
        className={`mt-4 text-sm ${failed ? "form-error" : ""}`}
      >
        {status}
      </p>
    </form>
  );
}
