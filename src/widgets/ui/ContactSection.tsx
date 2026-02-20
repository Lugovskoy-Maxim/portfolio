"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ContactLink, HeadingSectionTitle, TextArea } from "@/shared";
import { CONTACTS_DESCRIPTION, CONTACTS_LINKS } from "@/shared/lib/constants";
import { Button } from "@/shared/ui/Button";

export default function ContactSection() {
  const pathname = usePathname();
  const isContactsPage = pathname?.startsWith("/contacts") ?? false;

  return (
    <section
      id="contacts"
      className="flex w-full max-w-5xl flex-col gap-8 px-4 py-12 md:px-8"
      aria-labelledby="contacts-heading"
    >
      {!isContactsPage && <HeadingSectionTitle title="контакты" />}
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <TextArea>{CONTACTS_DESCRIPTION}</TextArea>
          {!isContactsPage && (
            <Button variant="primary" as="a" href="/contacts" className="mt-4">
              Связаться со мной
            </Button>
          )}
        </motion.div>
        <motion.div
          className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-md)]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
            Свяжись со мной
          </h3>
          <div className="flex flex-col gap-3">
            {CONTACTS_LINKS.map((item, index) => (
              <ContactLink key={index} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
