import { profile, socials, bio, projects } from "./data";

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#about" className="nav-brand">{profile.name}</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#connect">Connect</a>
          </div>
        </div>
      </nav>

      <main className="page">
      {/* HERO: photo + bio */}
      <section id="about" className="hero">
        <div className="portrait">
          <img src={profile.photo} alt={profile.name} />
        </div>

        <div className="bio-wrap">
          {bio.map((para, i) => (
            <p key={i} className={i === 0 ? "bio lead" : "bio"}>
              {para.map((part, j) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <span key={j} className="hl">
                    {part.h}
                  </span>
                )
              )}
            </p>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2 className="kicker">Building</h2>
        <div className="proj-list">
          {projects.map((p) => (
            <a
              key={p.name}
              className="proj"
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <div className="proj-head">
                <h3 className="proj-name">{p.name}</h3>
                <span className="proj-meta">
                  <span className="proj-status">{p.status}</span>
                  <span className="proj-year">{p.year}</span>
                </span>
              </div>
              <p className="proj-tagline">{p.tagline}</p>
              <p className="proj-desc">{p.description}</p>
              <span className="proj-go">View ↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="connect">
        <h2 className="kicker">Let's connect</h2>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.label}
              className="social-btn"
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-name">{s.label}</span>
              <span className="social-sub">{s.handle} ↗</span>
            </a>
          ))}
        </div>
        <a className="email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </section>

      <footer className="bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </footer>
      </main>
    </>
  );
}
