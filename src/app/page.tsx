
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "ResolveDesk",
    category: "Full-Stack Engineering",
    description:
      "A ticket management platform with role-based access, workflow management, and reporting.",
    technologies: "Java · Spring Boot · PostgreSQL",
    link: "https://resolvedesk-jrax.onrender.com/login",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home">
          MUROD MAVLYUDOV<span className="wordmark-dot">.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Connect</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-topline">
          <span>SOFTWARE ENGINEER / CREATIVE TECHNOLOGY</span>
          <span>PORTFOLIO — 2026</span>
        </div>

        <h1>
          Engineering with precision.
          <br />
          <span>Creating with purpose.</span>
        </h1>

        
<p className="hero-description">
  Hi, I&apos;m Murod, a software engineer building thoughtful
  digital experiences through technology, design,
  and problem-solving.
</p>


        <a className="text-link" href="#work">
          Explore selected work <span aria-hidden="true">↗</span>
        </a>

        <div className="hero-bottom">
          <span>FULL-STACK DEVELOPMENT</span>
          <span>DESIGN-DRIVEN ENGINEERING</span>
          <span>BASED IN NORTH CAROLINA</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / PORTFOLIO</p>
            <h2>Selected Work<span className="accent">.</span></h2>
          </div>
          <p>A selection of applications and digital experiences.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              
<div className="project-visual">
 
<Image
  src="/resolvedesk-dashboard.png"
  alt="ResolveDesk application dashboard showing ticket statistics, navigation, and workflow controls"
  width={1590}
  height={896}
  className="project-screenshot"
  sizes="(max-width: 768px) 100vw, 88vw"
  unoptimized
/>

</div>


              <div className="project-info">
                <div>
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="tech">{project.technologies}</span>
                </div>
               
<a
  href="/projects/resolvedesk"
  aria-label={`View ${project.name} case study`}
  className="project-arrow"
>
  ↗
</a>

              </div>
            </article>
          ))}
        </div>
      </section>

      
<section className="about-section" id="about">
  <div className="about-inner">
    <div className="about-heading">
      <p className="eyebrow">02 / ABOUT ME</p>

      <h2>
        Technical thinking.
        <br />
        <span>Creative perspective.</span>
      </h2>
    </div>

    <div className="about-details">
      <p className="about-lead">
        I&apos;m a software engineer with a background in
        financial services, bringing together technical
        problem-solving and real-world business experience.
      </p>

      <p className="about-secondary">
        My work focuses on building reliable, purposeful
        applications. From full-stack development to creative
        digital experiences, I&apos;m interested in technology
        that combines functionality with thoughtful design.
      </p>

      <div className="about-expertise">
        <p>AREAS OF EXPERTISE & INTEREST</p>

        <div className="expertise-tags">
          <span>Full-Stack Development</span>
          <span>Java & Spring Boot</span>
          <span>Financial Technology</span>
          <span>Database Development</span>
          <span>Creative Technology</span>
        </div>
      </div>
    </div>
  </div>
</section>


      
<footer id="contact">
  <div>
    <p className="eyebrow">03 / CONNECT</p>
    <h2>Let's build something meaningful.</h2>
    <p className="footer-description">
      Explore my projects and connect with me professionally.
    </p>
  </div>

  <div className="footer-links">
    <a
      href="https://www.linkedin.com/in/murod-mavlyudov-45742018a/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn ↗
    </a>

    <a
      href="https://github.com/mavlyud99"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub ↗
    </a>
  </div>

  <p className="copyright">
    © 2026 Murod Mavlyudov
  </p>
</footer>

    </main>
  );
}
