import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { categories, githubAvatar, githubProfile, projects, type Project, type ProjectCategory } from './projects'
import './styles.css'

const externalLinkProps = { target: '_blank', rel: 'noreferrer noopener' }
const spaced = (word: string) => word.split('').join(' ')


function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className={`loader ${hidden ? 'loader-hidden' : ''}`} role="status" aria-live="polite" aria-label="Loading Ishan Krishna Verma portfolio">
      <div className="loader-island">
        <span>i</span>
        <span>s</span>
        <span>h</span>
        <span>a</span>
        <span>n</span>
      </div>
      <p>% npx ishan</p>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header" aria-label="primary navigation">
      <nav className="nav-side" aria-label="main left links">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
      </nav>

      <NavLink to="/" className="mark" aria-label="Ishan Krishna Verma home">
        <span>ikv</span>
      </NavLink>

      <nav className="nav-side nav-right" aria-label="main right links">
        <NavLink to="/resume">resume</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </header>
  )
}

function CreativeNav() {
  return (
    <nav className="creative-nav island-nav" aria-label="creative index">
      {categories.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

function Page({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <>
      <Header />
      <main key={location.pathname} className="page-shell entrance">
        {children}
      </main>
    </>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <a className="project-row" href={project.github} {...externalLinkProps} aria-label={`${project.title} on GitHub`}>
      <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
      <span className="project-copy">
        <span className="project-kicker">{project.category}</span>
        <strong>{project.title}</strong>
        <span>{project.description}</span>
        <em>{project.technologies.join(' · ')}</em>
      </span>
      <span className="arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}

function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 7)

  return (
    <Page>
      <section className="hero" aria-labelledby="home-title">
        <div className="avatar-wrap">
          <img src={githubAvatar} alt="GitHub avatar of Ishan Krishna Verma" loading="lazy" />
        </div>
        <p className="label">{spaced('product')} @ {spaced('imagination')}</p>
        <h1 id="home-title">Ishan Krishna Verma</h1>
        <p className="terminal">% npx ishan</p>
        <p className="lede">
          i make software, systems and weird experiments because i want to see if they can exist. lately that
          means AI assistants, school mobility tools, interfaces, automation and small prototypes that refuse
          to stay in a notes app.
        </p>
      </section>

      <section className="section-block" aria-labelledby="highlights-title">
        <p className="label">h i g h l i g h t s!</p>
        <div className="section-heading">
          <h2 id="highlights-title">some things i built because i could</h2>
          <p>works on my machine. occasionally on other machines too.</p>
        </div>
        <div className="project-list">
          {featured.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <CreativeNav />
    </Page>
  )
}

function About() {
  const sections = [
    {
      number: '01',
      title: 'who i am',
      body: 'i am Ishan Krishna Verma, a builder who learns by making the thing slightly before knowing exactly how it should be made. the work usually starts with curiosity and ends as a working system, or at least a useful failure.',
    },
    {
      number: '02',
      title: 'what i build',
      body: 'software, AI prototypes, interfaces, automation, school utility tools, voice assistants, tracking experiments and tiny ideas that become larger than expected.',
    },
    {
      number: '03',
      title: 'how i think',
      body: 'start small. make it real. notice what breaks. remove the boring parts. keep the strange part if it is honest.',
    },
    {
      number: '04',
      title: "things i'm exploring",
      body: 'LLM interfaces, voice interaction, legal research tools, mobility coordination, computer vision, hardware microphones and the space between product and experiment.',
    },
    {
      number: '05',
      title: 'where to find my work',
      body: 'the public trail is on GitHub. some projects are polished, some are messy, all of them are evidence that i kept building.',
    },
  ]

  return (
    <Page>
      <article className="content-page">
        <p className="label">a b o u t</p>
        <h1>i like turning half-formed ideas into things you can click, speak to or break.</h1>
        {sections.map((section) => (
          <section className="about-row" key={section.number}>
            <span>{section.number}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </section>
        ))}
        <a className="text-link" href={githubProfile} {...externalLinkProps}>
          github ↗
        </a>
      </article>
      <CreativeNav />
    </Page>
  )
}

function CategoryPage({ category }: { category: ProjectCategory }) {
  const info = categories.find((item) => item.label === category)
  const list = projects.filter((project) => project.category === category)

  if (!info) return null

  return (
    <Page>
      <section className="content-page">
        <p className="label">{spaced(info.label)}</p>
        <h1>{info.description}</h1>

        {category === 'ai' && (
          <div className="case-note">
            <h2>featured signal: Antigravity-Jarvis</h2>
            <p>
              voice interaction, LLM integration, ElevenLabs speech, TradingView webhooks, desktop automation,
              multi-device microphone support, WebSocket architecture and ESP32 microphone nodes — arranged as a
              personal automation experiment rather than a documentation page.
            </p>
          </div>
        )}

        {category === 'dev' && (
          <div className="case-note">
            <h2>flagship: Smart Traffic Management System</h2>
            <p>
              real-time school traffic coordination and smart signal management with bus tracking, pickup
              coordination, live maps, traffic insights, weather-aware predictions, pedestrian safety and
              notifications.
            </p>
          </div>
        )}

        <div className="project-list">
          {list.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
      <CreativeNav />
    </Page>
  )
}

function Writing() {
  return (
    <Page>
      <section className="content-page empty-state">
        <p className="label">w r i t i n g</p>
        <h1>notes are not published yet.</h1>
        <p>build logs, essays and project notes will live here when they exist. no fake articles. no lorem ipsum pretending to be thought.</p>
      </section>
      <CreativeNav />
    </Page>
  )
}

function Contact() {
  return (
    <Page>
      <section className="content-page contact-page">
        <p className="label">t o u c h</p>
        <h1>
          have an interesting idea, project or experiment?
          <br />
          you know where to find me.
        </h1>
        <a className="text-link" href={githubProfile} {...externalLinkProps}>
          GitHub ↗
        </a>
        <a className="text-link" href="mailto:hello@example.com">
          email placeholder
        </a>
        <p className="micro">replace the email when the real inbox is ready.</p>
      </section>
      <CreativeNav />
    </Page>
  )
}

function Resume() {
  return (
    <Page>
      <section className="content-page empty-state">
        <p className="label">r e s u m e</p>
        <h1>resume slot reserved.</h1>
        <p>a PDF can be plugged in here later. until then, the work is the archive.</p>
        <a className="text-link" href={githubProfile} {...externalLinkProps}>
          view public work ↗
        </a>
      </section>
      <CreativeNav />
    </Page>
  )
}

function NotFound() {
  return (
    <Page>
      <section className="content-page empty-state">
        <p className="label">4 0 4</p>
        <h1>this route wandered off.</h1>
        <NavLink className="text-link" to="/">
          go home
        </NavLink>
      </section>
    </Page>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<CategoryPage category="dev" />} />
        <Route path="/ai" element={<CategoryPage category="ai" />} />
        <Route path="/design" element={<CategoryPage category="design" />} />
        <Route path="/experiments" element={<CategoryPage category="experiments" />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
