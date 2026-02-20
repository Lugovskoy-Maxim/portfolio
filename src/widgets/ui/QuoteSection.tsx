"use client";

import { motion } from "framer-motion";
import { QUOTE, QUOTE_AUTHOR } from "@/shared/lib/constants";

export default function QuoteSection() {
  return (
    <section className="w-full max-w-5xl px-4 py-8 md:px-8" aria-label="Цитата">
      <motion.div
        className="flex flex-col items-end"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <blockquote className="relative rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 px-6 py-5 pr-8 md:px-8 md:py-6">
          <span className="absolute left-4 top-2 text-4xl text-[var(--primary)]/40" aria-hidden>
            &ldquo;
          </span>
          <p className="text-lg italic text-[var(--foreground)] sm:text-xl md:text-2xl lg:text-3xl">
            {QUOTE}
          </p>
          <cite className="mt-3 block text-right not-italic text-[var(--foreground-muted)] text-sm sm:text-base">
            — {QUOTE_AUTHOR}
          </cite>
        </blockquote>
      </motion.div>
    </section>
  );
}
