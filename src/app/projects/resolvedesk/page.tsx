
import Image from "next/image";
import Link from "next/link";

const screenshots = [
  {
    src: "/resolvedesk-dashboard.png",
    title: "01 / Dashboard",
    description:
      "An overview of ticket activity, statuses, and team workload.",
  },
  {
    src: "/resolvedesk-tickets.png",
    title: "02 / Ticket Management",
    description:
      "Search, filter, prioritize, and manage support requests.",
  },
  {
    src: "/resolvedesk-create.png",
    title: "03 / Ticket Creation",
    description:
      "Create requests with validation, categorization, and assignment.",
  },
];

export default function ResolveDeskPage() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="wordmark">
          MUROD MAVLYUDOV.
        </Link>
        <Link href="/#work">← Back to portfolio</Link>
      </header>

      <section className="hero">
        <div className="hero-topline">
          <span>PROJECT 01 / FULL-STACK ENGINEERING</span>
          <span>SOFTWARE DEVELOPMENT</span>
        </div>

        <h1>
          Resolve<span>Desk.</span>
        </h1>

        <p className="hero-description">
          A full-stack support ticket management platform
          designed to organize requests, manage workflows,
          and provide visibility into team activity.
        </p>

        <a
          className="text-link"
          href="https://resolvedesk-jrax.onrender.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore live application ↗
        </a>

        <div className="hero-bottom">
          <span>JAVA / SPRING BOOT</span>
          <span>POSTGRESQL</span>
          <span>FULL-STACK APPLICATION</span>
        </div>
      </section>

      <section className="work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PROJECT</p>
            <h2>Built for clarity<span className="accent">.</span></h2>
          </div>
        </div>

        <p className="hero-description">
          ResolveDesk brings support requests into one
          application, allowing authorized users to track
          tickets from creation to resolution. The project
          combines backend development, database persistence,
          authentication, and a server-rendered interface.
        </p>

        <div className="projects">
          {screenshots.map((shot) => (
            <article key={shot.src}>
              <div className="project-visual">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={1590}
                  height={896}
                  className="project-screenshot"
                  sizes="(max-width: 768px) 100vw, 88vw"
                  unoptimized
                />
              </div>

              <div className="project-info">
                <div>
                  <p className="eyebrow">{shot.title}</p>
                  <p>{shot.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <p className="eyebrow">TECHNICAL FOUNDATION</p>
        <h2>
          Built with purpose.
          <br />
          <span>Engineered with care.</span>
        </h2>

        <p>
          Java, Spring Boot, Spring Security, Spring Data JPA,
          PostgreSQL, Thymeleaf, Maven, JUnit, and Mockito.
          The application includes role-based access,
          ticket workflows, reporting, and automated testing.
        </p>
      </section>

      <footer>
        <p className="eyebrow">EXPLORE MORE</p>
        <h2>Interested in the application?</h2>
        <Link href="/" className="text-link">
          Return to portfolio ↗
        </Link>
        <p className="copyright">
          © 2026 Murod Mavlyudov
        </p>
      </footer>
    </main>
  );
}
