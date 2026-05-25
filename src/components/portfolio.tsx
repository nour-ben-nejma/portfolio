import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Sparkles, Code2, Layers, Zap } from "lucide-react";
import portrait from "@/assets/portrait.png";

const Github = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const projects = [
  {
    name: "CoEtudiant Housing",
    stack: "React · Node",
    desc: "A collaborative housing platform for students, facilitating shared accommodations and roommate matching.",
    url: "https://github.com/nour-ben-nejma/coetudiant-housing-platform",
    year: "2026",
    tag: "Web App",
  },
  {
    name: "HIPRO Platform",
    stack: "React",
    desc: "Modern, high-performance frontend interface. Currently in production.",
    url: "https://github.com/mazentoraa/HIPRO_FRONTEND_REACT",
    year: "2026",
    tag: "Frontend",
  },
  {
    name: "Logistics Distribution",
    stack: "Vue · Node",
    desc: "End-to-end management system orchestrating routes, stock flows and dispatch in real time.",
    url: "https://github.com/nour-ben-nejma/logistics-distribution-management-system",
    year: "2025",
    tag: "Full Stack",
  },
  {
    name: "WATC Platform",
    stack: "TypeScript · React",
    desc: "Modern platform engineered with type-safe architecture and component-driven design.",
    url: "https://github.com/nour-ben-nejma/WATCplatform",
    year: "2025",
    tag: "Web App",
  },
  {
    name: "Hamss",
    stack: "JavaScript",
    desc: "An expressive interactive experience exploring sound, motion and intimacy of touch.",
    url: "https://github.com/nour-ben-nejma/Hamss",
    year: "2024",
    tag: "Experiment",
  },
  {
    name: "Entraide Locale",
    stack: "Web · Social Impact",
    desc: "Solidarity web application connecting communities to local social aid in real time.",
    url: "https://github.com/nour-ben-nejma/Application-web-solidaire-pour-les-aides-sociales-Entraide-locale",
    year: "2024",
    tag: "Civic Tech",
  },
  {
    name: "Page Facebook",
    stack: "HTML · CSS",
    desc: "Pixel-faithful recreation studying the anatomy of one of the web's iconic interfaces.",
    url: "https://github.com/nour-ben-nejma/Page-Facebook",
    year: "2023",
    tag: "UI Study",
  },
];

const skills = [
  { icon: Code2, label: "TypeScript" },
  { icon: Layers, label: "React / Vue" },
  { icon: Zap, label: "Node.js" },
  { icon: Sparkles, label: "UI / UX" },
];

export default function Portfolio() {
  const [time, setTime] = useState("");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Tunis" }));
    };
    tick();
    const i = setInterval(tick, 30_000);
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move as any);
    return () => { clearInterval(i); window.removeEventListener("mousemove", move as any); };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden grain selection:bg-pop selection:text-paper">
      {/* Cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full opacity-30 transition-transform duration-300 ease-out"
        style={{
          left: cursor.x - 250,
          top: cursor.y - 250,
          background: "radial-gradient(circle, hsl(var(--pop) / 0.4), transparent 70%)",
        }}
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-paper/70 border-b border-ink/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-tight">
            n<span className="text-pop">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-mono-cool text-xs uppercase tracking-widest">
            <a href="#work" className="hover:text-pop transition-colors">Work</a>
            <a href="#about" className="hover:text-pop transition-colors">About</a>
            <a href="#contact" className="hover:text-pop transition-colors">Contact</a>
          </div>
          <a
            href="mailto:Bennejmanour05@gmail.com"
            className="font-mono-cool text-xs uppercase tracking-widest border border-ink px-4 py-2 hover-lift bg-paper"
          >
            Let's talk →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="absolute top-32 right-10 md:right-32 w-[400px] h-[400px] blob bg-pop opacity-40 -z-10" />
        <div className="absolute top-60 right-40 md:right-80 w-[300px] h-[300px] blob bg-electric opacity-30 -z-10" style={{ animationDelay: "-6s" }} />

        <div className="flex items-center gap-3 mb-12 reveal">
          <span className="h-2 w-2 rounded-full bg-pop animate-pulse" />
          <span className="font-mono-cool text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Available for select projects · Tunis {time}
          </span>
        </div>

        <h1 className="font-display text-[15vw] md:text-[11vw] leading-[0.85] tracking-tighter reveal">
          Nour <span className="italic font-light">El Houda</span>
          <br />
          Ben <span className="bg-gradient-to-r from-pop via-fuchsia-500 to-electric bg-clip-text text-transparent">Nejma</span>
          <span className="text-pop">.</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 reveal" style={{ animationDelay: "0.2s" }}>
          <p className="md:col-span-5 md:col-start-1 text-xl md:text-2xl font-display leading-snug text-balance">
            Software engineer & full stack developer crafting <em className="text-pop not-italic">thoughtful</em>, performant interfaces — where code meets care.
          </p>
          <div className="md:col-span-4 md:col-start-9 self-end font-mono-cool text-xs uppercase tracking-widest space-y-2 text-muted-foreground">
            <div className="flex justify-between border-b border-ink/20 pb-2"><span>Role</span><span className="text-ink">Software Eng. Student</span></div>
            <div className="flex justify-between border-b border-ink/20 pb-2"><span>Focus</span><span className="text-ink">Full Stack Web</span></div>
            <div className="flex justify-between border-b border-ink/20 pb-2"><span>Based</span><span className="text-ink">Tunisia 🇹🇳</span></div>
            <div className="flex justify-between"><span>Status</span><span className="text-pop">Open to work</span></div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <section className="border-y-2 border-ink py-6 bg-ink text-paper overflow-hidden">
        <div className="flex whitespace-nowrap marquee font-display text-6xl md:text-8xl">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>Web Development</span>
              <span className="text-pop">✦</span>
              <span className="italic font-light">Mobile Development</span>
              <span className="text-pop">✦</span>
              <span>AI Integration</span>
              <span className="text-pop">✦</span>
              <span className="italic font-light">DevOps</span>
              <span className="text-pop">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 md:py-32">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <span className="font-mono-cool text-xs uppercase tracking-[0.3em] text-muted-foreground">§ 01 — Selected Work</span>
            <h2 className="font-display text-6xl md:text-8xl mt-4 tracking-tighter">
              Recent <em className="font-light">things</em> I built<span className="text-pop">.</span>
            </h2>
          </div>
          <a href="https://github.com/nour-ben-nejma" target="_blank" rel="noreferrer"
            className="font-mono-cool text-xs uppercase tracking-widest border-b border-ink hover:text-pop hover:border-pop transition-colors flex items-center gap-1">
            All on GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-0 border-t border-ink/30">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block border-b border-ink/30 py-8 md:py-12 hover:bg-ink hover:text-paper transition-colors duration-500 px-2 md:px-6 -mx-2 md:-mx-6"
            >
              <div className="grid md:grid-cols-12 items-center gap-6">
                <div className="md:col-span-1 font-mono-cool text-xs opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-5xl tracking-tight">
                    {p.name}
                  </h3>
                </div>
                <div className="md:col-span-2 font-mono-cool text-xs uppercase tracking-widest opacity-70">
                  {p.tag}
                </div>
                <div className="md:col-span-3 text-sm md:text-base leading-snug max-w-md">
                  {p.desc}
                </div>
                <div className="md:col-span-1 font-mono-cool text-xs opacity-70">{p.year}</div>
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-8 h-8 transition-transform duration-500 group-hover:rotate-45 group-hover:text-pop" />
                </div>
              </div>
              <div className="mt-3 md:ml-[8.33%] font-mono-cool text-xs opacity-50">{p.stack}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-ink text-paper py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-pop" />
            <img
              src={portrait}
              alt="Portrait of Nour Ben Nejma"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full h-auto object-cover grayscale-[20%]"
            />
          </div>
          <div className="md:col-span-7 md:pl-12">
            <span className="font-mono-cool text-xs uppercase tracking-[0.3em] text-paper/60">§ 02 — About</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 tracking-tighter leading-[0.95]">
              I write code <em className="font-light">like</em> a letter — with <span className="text-pop">intention</span>.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-paper/80 max-w-xl">
              I'm a software engineering student passionate about building digital products that feel
              effortless to use and rigorous beneath the surface. I move between architecture and
              pixels — equally curious about a clean state machine and a perfect easing curve.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-paper/80 max-w-xl">
              Currently sharpening my craft across the full stack, exploring TypeScript, modern
              frameworks, and the quiet art of shipping things that last.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((s) => (
                <div key={s.label} className="border border-paper/20 p-4 hover:border-pop hover:bg-paper/5 transition-colors">
                  <s.icon className="w-5 h-5 text-pop mb-3" />
                  <div className="font-mono-cool text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-paper/20 pt-8">
              <div>
                <div className="font-display text-5xl text-pop">7+</div>
                <div className="font-mono-cool text-xs uppercase tracking-widest mt-2 text-paper/60">Repositories</div>
              </div>
              <div>
                <div className="font-display text-5xl text-pop">∞</div>
                <div className="font-mono-cool text-xs uppercase tracking-widest mt-2 text-paper/60">Curiosity</div>
              </div>
              <div>
                <div className="font-display text-5xl text-pop">3</div>
                <div className="font-mono-cool text-xs uppercase tracking-widest mt-2 text-paper/60">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 md:py-40 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blob bg-acid opacity-20 -z-10" />

        <span className="font-mono-cool text-xs uppercase tracking-[0.3em] text-muted-foreground">§ 03 — Contact</span>
        <h2 className="font-display text-7xl md:text-[12vw] leading-[0.85] tracking-tighter mt-6">
          Let's make
          <br />
          something<span className="text-pop">.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <a
            href="mailto:Bennejmanour05@gmail.com"
            className="group border-2 border-ink p-8 md:p-12 hover-lift bg-paper flex flex-col justify-between min-h-[200px]"
          >
            <Mail className="w-8 h-8 text-pop" />
            <div>
              <div className="font-mono-cool text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="font-display text-3xl md:text-4xl mt-2 group-hover:text-pop transition-colors">
                Bennejmanour05@gmail.com
              </div>
            </div>
          </a>
          <a
            href="https://github.com/nour-ben-nejma"
            target="_blank"
            rel="noreferrer"
            className="group border-2 border-ink p-8 md:p-12 hover-lift bg-paper flex flex-col justify-between min-h-[200px]"
          >
            <Github className="w-8 h-8 text-pop" />
            <div>
              <div className="font-mono-cool text-xs uppercase tracking-widest text-muted-foreground">GitHub</div>
              <div className="font-display text-3xl md:text-4xl mt-2 group-hover:text-pop transition-colors">
                @nour-ben-nejma
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-ink py-8 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-4 font-mono-cool text-xs uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Nour Ben Nejma — Crafted with care</div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/nour-ben-nejma" target="_blank" rel="noreferrer" className="hover:text-pop flex items-center gap-1"><Github className="w-3 h-3" /> GitHub</a>
            <a href="#" className="hover:text-pop flex items-center gap-1"><Linkedin className="w-3 h-3" /> LinkedIn</a>
            <a href="mailto:bennejmanour05@gmail.com" className="hover:text-pop flex items-center gap-1"><Mail className="w-3 h-3" /> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
