import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";

export default function AboutCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-8 py-16 shadow-2xl sm:px-12 lg:px-16">
          {/* Background Decorations */}

          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur">
              Continue Your Journey
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to Explore More?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Dive deeper into our latest articles, browse inspiring gallery
              collections, and discover practical resources crafted for modern
              developers and technology enthusiasts.
            </p>

            {/* Static Highlights */}

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-white">
                  120+
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Articles
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  25+
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Categories
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  100K+
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Readers
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  Weekly
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Updates
                </p>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/blog">
                  Explore Blog

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />

                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Bottom Note */}

            <p className="mt-8 text-sm text-blue-200">
              Built with Next.js App Router, TypeScript, Tailwind CSS, and
              modern web best practices.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}