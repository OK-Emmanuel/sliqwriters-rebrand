import { Footer } from "@/components/footer";
import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <main id="main" className="container py-28">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="my-8 text-muted">
          The requested page could not be found.
        </p>
        <Button href="/">Home</Button>
      </main>
      <Footer />
    </>
  );
}
