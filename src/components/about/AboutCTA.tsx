import Link from "next/link";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";

export default function AboutCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-blue-600 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Explore More?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Discover our latest articles, explore the gallery,
            or get in touch to learn more about this Blog
            Management System.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary">
              <Link href="/blog">
                Explore Blog
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}