"use client";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";

const services = [
  { n:"01", title:"Product strategy", text:"Shape the right product before writing expensive code. We turn rough ideas into a clear, testable roadmap." },
  { n:"02", title:"UX & UI design", text:"Interfaces that feel obvious, distinctive, and fast—from user flows and prototypes to complete design systems." },
  { n:"03", title:"Web engineering", text:"Reliable SaaS products, marketplaces, dashboards, and websites built with modern, maintainable technology." },
  { n:"04", title:"Mobile apps", text:"Polished iOS and Android experiences with React Native or Flutter, ready for the App Store and Play Store." },
  { n:"05", title:"SaaS solutions", text:"Subscription products built for reliable onboarding, secure billing, scalable operations, and measurable growth." },
  { n:"06", title:"AI integrations", text:"Useful AI workflows, assistants, search, and automation connected safely to your existing product and data." },
];

const testimonials = [
  { quote:"Boldlume took us from a messy idea to a product our customers understood instantly. They felt like part of our team from day one.", name:"Maya Chen", role:"Co-founder, Fieldnote" },
  { quote:"The new platform is faster, clearer, and finally reflects the quality of our service. We launched on schedule—and without drama.", name:"Arjun Mehta", role:"Product Lead, Kinetiq" },
  { quote:"They balance design ambition with engineering reality better than any studio we’ve worked with. The result speaks for itself.", name:"Sofia Reyes", role:"CEO, Looma Health" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return <main>
    <nav className="nav shell">
      <a className="brand" href="#top" aria-label="Boldlume home"><img src="/boldlume-logo-tagline.png" alt="Boldlume — Bright ideas. Boldly built." /></a>
      <div className={`nav-links ${open?"open":""}`}><a href="#work" onClick={()=>setOpen(false)}>Work</a><a href="#services" onClick={()=>setOpen(false)}>Services</a><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></div>
      <a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={16}/></a>
      <button className="menu" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>

    <section className="hero shell" id="top">
      <div className="eyebrow"><span/>Global software development agency · Available worldwide</div>
      <p className="brand-promise">Bright ideas. <strong>Boldly built.</strong></p>
      <h1>We build digital<br/>products that <em>move.</em></h1>
      <div className="hero-bottom"><div className="hero-proof"><p>Strategy, design, and engineering for ambitious teams. From a sharp first release to products used at scale.</p><div><span>✓ Senior team only</span><span>✓ Weekly demos</span><span>✓ Launch-ready code</span></div></div><a className="circle-link" href="#work" aria-label="See our work"><ArrowDown size={27}/></a></div>
      <div className="ticker"><span>WEB PLATFORMS</span><i>✦</i><span>MOBILE APPS</span><i>✦</i><span>PRODUCT DESIGN</span><i>✦</i><span>AI & AUTOMATION</span></div>
    </section>

    <section className="work-preview shell" id="work">
      <div className="section-head"><span>01 / Selected work</span><h2>Built for the<br/>real world.</h2></div>
      <div className="projects">
        <article className="project-card blue"><div className="project-copy"><span>Boldlume concept · SaaS platform</span><h3>OrbitOps</h3><p>A focused operations workspace that helps distributed teams plan, automate, and deliver without the clutter.</p><div className="project-tags"><b>Next.js</b><b>TypeScript</b><b>PostgreSQL</b></div><a href="https://github.com/wekan/wekan" target="_blank" rel="noreferrer">Explore the open-source base <ArrowUpRight size={16}/></a></div><div className="project-visual"><div className="browser"><div className="browser-bar"><span className="concept-signature">BOLDLUME / CONCEPT</span>● &nbsp; orbitops / today</div><div className="browser-body"><aside>ORBITOPS<br/><b>My tasks</b><br/>Roadmap<br/>Team</aside><div><small>MONDAY, AUG 24</small><h4>Good morning, Alex.</h4><div className="fake-row">Launch onboarding flow <b>In review</b></div><div className="fake-row">Mobile navigation <b>In progress</b></div><div className="fake-row">QA release candidate <b>Ready</b></div></div></div></div></div></article>
        <div className="project-grid">
          <article className="small-project coral"><div className="phone"><div className="phone-top">9:41 <b>● ● ●</b></div><span className="concept-signature phone-signature">BOLDLUME / CONCEPT</span><span className="mini-label">TODAY</span><h4>Your money,<br/>in focus.</h4><div className="balance">₹84,920<small>Available balance</small></div><div className="chart"><i/><i/><i/><i/><i/><i/><i/></div></div><div className="small-copy"><span>Mobile app · React Native</span><h3>Finora</h3><p>A privacy-first personal finance app inspired by the open-source Firefly III ecosystem.</p><a href="https://github.com/firefly-iii/firefly-iii" target="_blank" rel="noreferrer">View open-source foundation <ArrowUpRight size={15}/></a></div></article>
          <article className="small-project lime"><div className="shop-ui"><b>VERDEON</b><div className="plant-shape"><span/><span/><span/></div><small>CALATHEA ORBIFOLIA</small><strong>Bring the outside in.</strong><button>Shop collection <ArrowRight size={14}/></button></div><div className="small-copy dark"><span>Headless commerce · Next.js</span><h3>Verdeon</h3><p>A fast, editorial commerce experience powered by the open-source Medusa platform.</p><a href="https://github.com/medusajs/medusa" target="_blank" rel="noreferrer">View open-source foundation <ArrowUpRight size={15}/></a></div></article>
        </div>
        <article className="ai-card"><div><span>AI integration · Knowledge assistant</span><h3>Atlas AI</h3><p>A secure company knowledge assistant that finds answers across documents, support history, and product data—with sources attached.</p><div className="project-tags"><b>OpenAI</b><b>RAG</b><b>Vector search</b></div></div><div className="ai-demo"><small>ASK ATLAS</small><p>What changed in the latest release?</p><div><i/> Atlas found 6 relevant sources</div><strong>Version 4.2 introduces faster search, team workspaces, and granular access controls.</strong></div></article>
      </div>
      <p className="case-note"><b>Portfolio transparency:</b> OrbitOps, Finora, Verdeon, and Atlas AI are concept case studies—not claimed client work. They demonstrate the product quality and technical directions Boldlume can deliver, with open-source foundations linked where applicable.</p>
    </section>

    <section className="services" id="services"><div className="shell"><div className="section-head inverse"><span>02 / What we do</span><h2>One team.<br/>Zero handoffs.</h2></div><div className="service-list">{services.map(s=><article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><Check size={24}/></article>)}</div></div></section>

    <section className="about shell" id="about"><div className="about-kicker">Small by design. Senior by default.</div><div className="about-layout"><h2>We make complex<br/>feel <em>simple.</em></h2><div><p>Boldlume is a global software development agency for founders and teams who care deeply about what they put into the world.</p><p>We combine product thinking, distinctive design, and reliable engineering—from the first workshop through launch and beyond.</p><div className="stats"><div><b>6–10</b><span>Weeks to a focused MVP</span></div><div><b>1</b><span>Integrated product team</span></div><div><b>100%</b><span>Source-code ownership</span></div></div></div></div></section>

    <section className="testimonials"><div className="shell"><div className="testimonial-head"><span>03 / Kind words</span><small>Sample testimonials for layout preview</small></div><div className="quote-grid">{testimonials.map((t,i)=><blockquote key={t.name}><b>“</b><p>{t.quote}</p><footer><span>{String(i+1).padStart(2,"0")}</span><div><strong>{t.name}</strong><small>{t.role} · Fictional example</small></div></footer></blockquote>)}</div></div></section>

    <section className="process shell"><div className="section-head"><span>04 / How it works</span><h2>Clear from<br/>day one.</h2></div><div className="process-steps"><article><b>01</b><h3>Align</h3><p>Goals, users, constraints, and a focused plan.</p></article><article><b>02</b><h3>Make</h3><p>Weekly progress, real prototypes, frequent decisions.</p></article><article><b>03</b><h3>Launch</h3><p>Thorough testing, a clean release, and measured learning.</p></article><article><b>04</b><h3>Grow</h3><p>Support, iteration, and a product that keeps improving.</p></article></div></section>

    <section className="contact" id="contact"><div className="shell"><div className="availability"><i/> Accepting new global projects</div><h2>Let’s make it<br/><em>matter.</em></h2><p>Tell us what you’re building, where you are today, and what success looks like. We’ll reply within two business days.</p><a href="mailto:business@boldlume.com?subject=New%20project%20inquiry">business@boldlume.com <ArrowUpRight/></a></div></section>
    <footer className="footer shell"><a className="brand footer-brand" href="#top" aria-label="Boldlume home"><img src="/boldlume-logo-tagline.png" alt="Boldlume — Bright ideas. Boldly built." /></a><p>© 2026 Boldlume. Bright ideas. Boldly built.</p><div><a href="mailto:business@boldlume.com">Email</a><a href="#work">Selected work</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
