import { Footer } from "@/components/footer";
import { Button } from "@/components/ui";
export default function PostNotFound() {
  return (
    <>
      <main id="main" className="container py-28">
        <h1>Post not found</h1>
        <p className="my-8">
          The post you are trying to open does not exist or is not published
          yet.
        </p>
        <Button href="/blog">Back to Blog</Button>
      </main>
      <Footer />
    </>
  );
}
