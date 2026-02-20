import type { Metadata } from "next";
import Link from "next/link";
import { CV } from "@/shared/lib/cv";
import { Button } from "@/shared/ui/Button";
import { PrintButton } from "@/features/cv/ui/PrintButton";

export const metadata: Metadata = {
  title: "Резюме | Луговской Максим — Фронтенд-разработчик",
  description: "Резюме Луговского Максима: фронтенд-разработчик, веб-дизайнер. Опыт, навыки, образование.",
};

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section">
      <h2 className="cv-heading">{title}</h2>
      {children}
    </section>
  );
}

export default function CvPage() {
  const { personal, summary, skills, experience, education, languages, softSkills } = CV;

  return (
    <article className="cv-page">
      <div className="cv-actions">
        <Button variant="primary" as="a" href="/">
          На главную
        </Button>
        <PrintButton />
      </div>

      <header className="cv-header">
        <h1 className="cv-title">{personal.fullName}</h1>
        <p className="cv-subtitle">{personal.position}</p>
        <p className="cv-location">{personal.location}</p>
        <ul className="cv-contacts" aria-label="Контакты">
          <li>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </li>
          <li>
            <a href={personal.telegram} target="_blank" rel="noopener noreferrer">
              Telegram: @TomiloDev
            </a>
          </li>
          <li>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </header>

      <CvSection title="О себе">
        <p className="cv-text">{summary}</p>
      </CvSection>

      <CvSection title="Навыки">
        <ul className="cv-skills-grid">
          <li><strong>Языки:</strong> {skills.languages.join(", ")}</li>
          <li><strong>Фреймворки:</strong> {skills.frameworks.join(", ")}</li>
          <li><strong>Стилизация:</strong> {skills.styling.join(", ")}</li>
          <li><strong>Состояние и данные:</strong> {skills.stateAndData.join(", ")}</li>
          <li><strong>БД:</strong> {skills.databases.join(", ")}</li>
          <li><strong>Инструменты:</strong> {skills.tools.join(", ")}</li>
          <li><strong>Нейросети и AI:</strong> {skills.ai.join(", ")}</li>
          <li><strong>Прочее:</strong> {skills.other.join(", ")}</li>
        </ul>
      </CvSection>

      <CvSection title="Опыт">
        <ul className="cv-list">
          {experience.map((item, i) => (
            <li key={i} className="cv-item">
              <span className="cv-period">{item.period}</span>
              <div>
                <strong>{item.role}</strong>
                {item.company && <span className="cv-company"> · {item.company}</span>}
                <p className="cv-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Образование">
        <ul className="cv-list">
          {education.map((item, i) => (
            <li key={i} className="cv-item">
              <span className="cv-period">{item.year}</span>
              <div>
                <strong>{item.name}</strong>
                <span className="cv-company"> · {item.place}</span>
                {item.details && <p className="cv-desc">{item.details}</p>}
              </div>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Языки">
        <ul className="cv-langs">
          {languages.map((lang, i) => (
            <li key={i}>{lang.name} — {lang.level}</li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Личные качества">
        <ul className="cv-soft">
          {softSkills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </CvSection>

      <p className="cv-footer-note">
        Актуальное портфолио и проекты:{" "}
        <Link href="/">Tomilo-Dev.ru</Link>
      </p>
    </article>
  );
}
