"use client";
import { ContactLink, HeadingSectionTitle, TextArea } from "@/shared";
import { CONTACTS_DESCRIPTION, CONTACTS_LINKS } from "@/shared/lib/constants";
import { usePathname } from "next/navigation";

export default function ContactSection() {
  const pathname = usePathname();
  const isContactsPage = pathname?.startsWith("/contacts") ?? false;
  return (
    <section
      id="contacts"
      className="flex shrink-0 px-4 md:px-18 max-w-5xl w-full items-start justify-between bg-(--background) gap-5 md:gap-8 lg:gap-10 flex-col "
    >
      {!isContactsPage && <HeadingSectionTitle title="контакты" />}
      <div className="flex flex-col md:flex-row justify-between items-center gap-20 py-6 px-6 md:px-0">
        <TextArea>{CONTACTS_DESCRIPTION}</TextArea>
        <div className="flex shrink-0 flex-col border border-gray-400 px-6 py-4 gap-2">
          <h1 className="text-lg font-semibold mb-2 text-gray-200">
            {"Свяжись со мной"}
          </h1>
          {CONTACTS_LINKS.map((item, index) => (
            <ContactLink key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
