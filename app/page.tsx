"use client";
import { FormEvent, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";

const services = [
  { n:"01", title:"Product strategy", text:"Shape the right product before writing expensive code. We turn rough ideas into a clear, testable roadmap." },
  { n:"02", title:"UX & UI design", text:"Interfaces that feel obvious, distinctive, and fast—from user flows and prototypes to complete design systems." },
  { n:"03", title:"Web engineering", text:"Reliable SaaS products, marketplaces, dashboards, and websites built with modern, maintainable technology." },
  { n:"04", title:"Mobile apps", text:"Polished iOS and Android experiences with React Native or Flutter, ready for the App Store and Play Store." },
  { n:"05", title:"SaaS solutions", text:"Subscription products built for reliable onboarding, secure billing, scalable operations, and measurable growth." },
  { n:"06", title:"AI integrations", text:"Useful AI workflows, assistants, search, and automation connected safely to your existing product and data." },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `New Boldlume Project Inquiry: ${data.get("project")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Project: ${data.get("project")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=business@boldlume.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
  };
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
        <article className="project-card blue"><div className="project-copy"><span>Founder experience · Web & mobile SaaS</span><h3>Meetn</h3><p>A cross-platform meeting and webinar product for sales teams, combining live video with interactive offers, media, scheduling, and replays across web, iOS, and Android.</p><div className="project-tags"><b>WebRTC</b><b>iOS & Android</b><b>Real-time</b></div><div className="platform-links"><a href="https://meetn.com/" target="_blank" rel="noreferrer">Website <ArrowUpRight size={14}/></a><a href="https://apps.apple.com/us/app/meetn/id1479818305" target="_blank" rel="noreferrer">App Store <ArrowUpRight size={14}/></a><a href="https://play.google.com/store/apps/details?id=com.meetn.app" target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={14}/></a></div></div><div className="project-visual"><div className="browser"><div className="browser-bar"><span className="concept-signature">WEB · IOS · ANDROID</span>● &nbsp; meetn / live room</div><div className="browser-body"><aside>MEETN<br/><b>Live room</b><br/>Replays<br/>Bookings</aside><div><small>SALES ROOM · LIVE</small><h4>Turn meetings into sales.</h4><div className="fake-row">Interactive offer <b>Live</b></div><div className="fake-row">One-click media <b>Ready</b></div><div className="fake-row">Meeting replay <b>Published</b></div></div></div></div></div></article>
        <div className="project-grid">
          <article className="small-project coral"><div className="phone"><div className="phone-top">9:41 <b>● ● ●</b></div><span className="concept-signature phone-signature">LIVE APP · IOS + ANDROID</span><span className="mini-label">YOUR LOOKBOOK</span><h4>Your wardrobe,<br/>made smarter.</h4><div className="balance">24 looks<small>Organized privately</small></div><div className="chart"><i/><i/><i/><i/><i/><i/><i/></div></div><div className="small-copy"><span>iOS & Android · AI-assisted fashion</span><h3>MiModa</h3><p>A private digital wardrobe that organizes outfits and garments, with AI-assisted recognition, tagging, and daily style ideas.</p><div className="platform-links"><a href="https://mimoda.app/" target="_blank" rel="noreferrer">Website <ArrowUpRight size={13}/></a><a href="https://apps.apple.com/us/app/mimoda/id6447212102" target="_blank" rel="noreferrer">App Store <ArrowUpRight size={13}/></a><a href="https://play.google.com/store/apps/details?id=com.saracapodiferro.mimoda" target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={13}/></a></div></div></article>
          <article className="small-project lime"><div className="shop-ui telecom-ui"><b>NXATEL</b><div className="signal-shape"><span/><span/><span/><span/></div><small>CALL · MESSAGE · MEET</small><strong>Every business conversation. One platform.</strong><button>Explore platform <ArrowRight size={14}/></button></div><div className="small-copy dark"><span>Web, iOS & Android communications</span><h3>NxaTel</h3><p>A unified mobile and web platform for business calling, messaging, meetings, connectivity, and CRM-integrated customer communication.</p><div className="platform-links"><a href="https://www.nxa.tel/" target="_blank" rel="noreferrer">Website <ArrowUpRight size={13}/></a><a href="https://apps.apple.com/us/app/nxatel/id1540067870" target="_blank" rel="noreferrer">App Store <ArrowUpRight size={13}/></a><a href="https://play.google.com/store/apps/details?id=com.nxatelapp" target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={13}/></a></div></div></article>
        </div>
        <article className="ai-card"><div><span>Founder experience · Web, desktop & mobile</span><h3>My Country Mobile</h3><p>An AI-first cloud phone and contact-center platform bringing calls, chat, SMS, video, routing, analytics, and intelligent assistance to web, desktop, iOS, and Android.</p><div className="project-tags"><b>Mobile apps</b><b>AI workflows</b><b>Omnichannel</b></div><div className="platform-links"><a href="https://www.mycountrymobile.com/" target="_blank" rel="noreferrer">Website <ArrowUpRight size={14}/></a><a href="https://apps.apple.com/us/developer/my-country-mobile-pte-ltd/id1278843730" target="_blank" rel="noreferrer">iOS publisher <ArrowUpRight size={14}/></a></div></div><div className="ai-demo"><small>MCM AI · MOBILE + DESKTOP</small><p>Every customer conversation, connected.</p><div><i/> Voice, SMS, chat and video in one thread</div><strong>AI-assisted routing, transcription, summaries, analytics, and CRM-connected customer workflows.</strong></div></article>
        <article className="gpu-card"><div className="gpu-copy"><span>Founder experience · AI & cloud platform</span><h3>GPU Global</h3><p>An AI-focused business platform bringing cloud infrastructure, intelligent automation, machine learning, and computer-vision services into one global offering.</p><div className="project-tags"><b>AI platform</b><b>Cloud infrastructure</b><b>Machine learning</b></div><div className="platform-links"><a href="https://gpuglobalai.com/" target="_blank" rel="noreferrer">Visit live platform <ArrowUpRight size={14}/></a></div></div><div className="gpu-visual"><div className="gpu-console"><div className="gpu-console-head"><span>GPU GLOBAL · AI INFRASTRUCTURE</span><i>LIVE</i></div><div className="gpu-metric"><small>COMPUTE NETWORK</small><strong>AI that scales<br/>with ambition.</strong></div><div className="gpu-nodes"><span><i/>AI Strategy</span><span><i/>Machine Learning</span><span><i/>Computer Vision</span></div><div className="gpu-status"><b>GLOBAL CLOUD</b><span>Systems operational</span></div></div></div></article>
      </div>
      <p className="case-note"><b>Project attribution:</b> Meetn, MiModa, NxaTel, My Country Mobile, and GPU Global are live products from Ankit Khandelwal’s professional portfolio and represent the founder experience behind Boldlume. Descriptions reflect publicly visible product capabilities; confidential responsibilities and outcomes are not disclosed.</p>
    </section>

    <section className="services" id="services"><div className="shell"><div className="section-head inverse"><span>02 / What we do</span><h2>One team.<br/>Zero handoffs.</h2></div><div className="service-list">{services.map(s=><article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><Check size={24}/></article>)}</div></div></section>

    <section className="about shell" id="about"><div className="about-kicker">Small by design. Senior by default.</div><div className="about-layout"><h2>We make complex<br/>feel <em>simple.</em></h2><div><p>Boldlume is a global software development agency for founders and teams who care deeply about what they put into the world.</p><p>We combine product thinking, distinctive design, and reliable engineering—from the first workshop through launch and beyond.</p><div className="stats"><div><b>6–10</b><span>Weeks to a focused MVP</span></div><div><b>1</b><span>Integrated product team</span></div><div><b>100%</b><span>Source-code ownership</span></div></div></div></div></section>

    <section className="process shell"><div className="section-head"><span>03 / How it works</span><h2>Clear from<br/>day one.</h2></div><div className="process-steps"><article><b>01</b><h3>Align</h3><p>Goals, users, constraints, and a focused plan.</p></article><article><b>02</b><h3>Make</h3><p>Weekly progress, real prototypes, frequent decisions.</p></article><article><b>03</b><h3>Launch</h3><p>Thorough testing, a clean release, and measured learning.</p></article><article><b>04</b><h3>Grow</h3><p>Support, iteration, and a product that keeps improving.</p></article></div></section>

    <section className="contact" id="contact"><div className="shell"><div className="availability"><i/> Accepting new global projects</div><div className="contact-layout"><div className="contact-intro"><h2>Let’s make it<br/><em>matter.</em></h2><p>Tell us what you’re building, where you are today, and what success looks like. We’ll reply within two business days.</p><a href="mailto:business@boldlume.com?subject=New%20project%20inquiry">business@boldlume.com <ArrowUpRight/></a><div className="contact-detail"><span>Based in India</span><span>Working worldwide</span><span>Remote-first collaboration</span></div></div><form className="contact-form" onSubmit={handleContact}><div className="form-row"><label><span>Your name</span><input type="text" name="name" placeholder="Alex Morgan" required /></label><label><span>Work email</span><input type="email" name="email" placeholder="alex@company.com" required /></label></div><label><span>What are you building?</span><input type="text" name="project" placeholder="SaaS platform, mobile app, AI workflow…" required /></label><label><span>Tell us about the project</span><textarea name="message" rows={6} placeholder="Your goals, current stage, timeline, and anything useful to know." required /></label><button type="submit">Start the conversation <ArrowUpRight size={19}/></button><small>Submitting opens a ready-to-send email draft addressed to Boldlume.</small></form></div></div></section>
    <footer className="footer shell"><a className="brand footer-brand" href="#top" aria-label="Boldlume home"><img src="boldlume-logo-tagline.png" alt="Boldlume — Bright ideas. Boldly built." /></a><p>© 2026 Boldlume. Bright ideas. Boldly built.</p><div><a href="mailto:business@boldlume.com">Email</a><a href="#work">Selected work</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
