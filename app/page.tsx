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
      <a className="brand" href="#top" aria-label="Boldlume home"><img src="boldlume-logo-tagline.png" alt="Boldlume — Bright ideas. Boldly built." /></a>
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
        <article className="project-card blue"><div className="project-copy"><span>Founder experience · Video SaaS</span><h3>Meetn</h3><p>A browser-based meeting and webinar platform built for sales teams, combining live video with interactive offers, media, scheduling, and replays.</p><div className="project-tags"><b>WebRTC</b><b>SaaS</b><b>Real-time</b></div><a href="https://meetn.com/" target="_blank" rel="noreferrer">Visit live platform <ArrowUpRight size={16}/></a></div><div className="project-visual"><div className="browser"><div className="browser-bar"><span className="concept-signature">LIVE PRODUCT</span>● &nbsp; meetn / live room</div><div className="browser-body"><aside>MEETN<br/><b>Live room</b><br/>Replays<br/>Bookings</aside><div><small>SALES ROOM · LIVE</small><h4>Turn meetings into sales.</h4><div className="fake-row">Interactive offer <b>Live</b></div><div className="fake-row">One-click media <b>Ready</b></div><div className="fake-row">Meeting replay <b>Published</b></div></div></div></div></div></article>
        <div className="project-grid">
          <article className="small-project coral"><div className="phone"><div className="phone-top">9:41 <b>● ● ●</b></div><span className="concept-signature phone-signature">LIVE APP · IOS + ANDROID</span><span className="mini-label">YOUR LOOKBOOK</span><h4>Your wardrobe,<br/>made smarter.</h4><div className="balance">24 looks<small>Organized privately</small></div><div className="chart"><i/><i/><i/><i/><i/><i/><i/></div></div><div className="small-copy"><span>Mobile app · AI-assisted fashion</span><h3>MiModa</h3><p>A private digital wardrobe that organizes outfits and garments, with AI-assisted recognition, tagging, and daily style ideas.</p><a href="https://mimoda.app/" target="_blank" rel="noreferrer">Visit live product <ArrowUpRight size={15}/></a></div></article>
          <article className="small-project lime"><div className="shop-ui telecom-ui"><b>NXATEL</b><div className="signal-shape"><span/><span/><span/><span/></div><small>CALL · MESSAGE · MEET</small><strong>Every business conversation. One platform.</strong><button>Explore platform <ArrowRight size={14}/></button></div><div className="small-copy dark"><span>Business communications platform</span><h3>NxaTel</h3><p>A unified platform for business calling, messaging, meetings, connectivity, and CRM-integrated customer communication.</p><a href="https://www.nxa.tel/" target="_blank" rel="noreferrer">Visit live platform <ArrowUpRight size={15}/></a></div></article>
        </div>
        <article className="ai-card"><div><span>Founder experience · AI communications</span><h3>My Country Mobile</h3><p>An AI-first cloud phone and contact-center platform bringing calls, chat, SMS, video, routing, analytics, and intelligent assistance into one workspace.</p><div className="project-tags"><b>Cloud telecom</b><b>AI workflows</b><b>Omnichannel</b></div><a className="project-live-link" href="https://www.mycountrymobile.com/" target="_blank" rel="noreferrer">Visit live platform <ArrowUpRight size={15}/></a></div><div className="ai-demo"><small>MCM AI · LIVE WORKSPACE</small><p>Every customer conversation, connected.</p><div><i/> Voice, SMS, chat and video in one thread</div><strong>AI-assisted routing, transcription, summaries, analytics, and CRM-connected customer workflows.</strong></div></article>
      </div>
      <p className="case-note"><b>Project attribution:</b> Meetn, MiModa, NxaTel, and My Country Mobile are live products from Ankit Khandelwal’s professional portfolio and represent the founder experience behind Boldlume. Descriptions reflect publicly visible product capabilities; confidential responsibilities and outcomes are not disclosed.</p>
    </section>

    <section className="services" id="services"><div className="shell"><div className="section-head inverse"><span>02 / What we do</span><h2>One team.<br/>Zero handoffs.</h2></div><div className="service-list">{services.map(s=><article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><Check size={24}/></article>)}</div></div></section>

    <section className="about shell" id="about"><div className="about-kicker">Small by design. Senior by default.</div><div className="about-layout"><h2>We make complex<br/>feel <em>simple.</em></h2><div><p>Boldlume is a global software development agency for founders and teams who care deeply about what they put into the world.</p><p>We combine product thinking, distinctive design, and reliable engineering—from the first workshop through launch and beyond.</p><div className="stats"><div><b>6–10</b><span>Weeks to a focused MVP</span></div><div><b>1</b><span>Integrated product team</span></div><div><b>100%</b><span>Source-code ownership</span></div></div></div></div></section>

    <section className="testimonials"><div className="shell"><div className="testimonial-head"><span>03 / Kind words</span><small>Sample testimonials for layout preview</small></div><div className="quote-grid">{testimonials.map((t,i)=><blockquote key={t.name}><b>“</b><p>{t.quote}</p><footer><span>{String(i+1).padStart(2,"0")}</span><div><strong>{t.name}</strong><small>{t.role} · Fictional example</small></div></footer></blockquote>)}</div></div></section>

    <section className="process shell"><div className="section-head"><span>04 / How it works</span><h2>Clear from<br/>day one.</h2></div><div className="process-steps"><article><b>01</b><h3>Align</h3><p>Goals, users, constraints, and a focused plan.</p></article><article><b>02</b><h3>Make</h3><p>Weekly progress, real prototypes, frequent decisions.</p></article><article><b>03</b><h3>Launch</h3><p>Thorough testing, a clean release, and measured learning.</p></article><article><b>04</b><h3>Grow</h3><p>Support, iteration, and a product that keeps improving.</p></article></div></section>

    <section className="contact" id="contact"><div className="shell"><div className="availability"><i/> Accepting new global projects</div><h2>Let’s make it<br/><em>matter.</em></h2><p>Tell us what you’re building, where you are today, and what success looks like. We’ll reply within two business days.</p><a href="mailto:business@boldlume.com?subject=New%20project%20inquiry">business@boldlume.com <ArrowUpRight/></a></div></section>
    <footer className="footer shell"><a className="brand footer-brand" href="#top" aria-label="Boldlume home"><img src="boldlume-logo-tagline.png" alt="Boldlume — Bright ideas. Boldly built." /></a><p>© 2026 Boldlume. Bright ideas. Boldly built.</p><div><a href="mailto:business@boldlume.com">Email</a><a href="#work">Selected work</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
