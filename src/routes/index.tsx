import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Play, Instagram, Mail, X, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos Civantos — Composer · Pianist · Synthesist" },
      {
        name: "description",
        content:
          "Portfolio of Carlos Civantos — film composer, pianist and synthesist. Cinematic scoring, jazz piano and analog synthesis from Utrecht.",
      },
      { property: "og:title", content: "Carlos Civantos — Composer · Pianist · Synthesist" },
      {
        property: "og:description",
        content: "Cinematic scoring, jazz piano and analog synthesis.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const works = [
  { title: "Nightfall", year: "2024", kind: "Original Score", img: work1 },
  { title: "Lowlight Sessions", year: "2024", kind: "Jazz Piano", img: work2 },
  { title: "Machine Heart", year: "2023", kind: "Synth Score", img: work3 },
  { title: "Ensemble No. 4", year: "2023", kind: "Chamber Score", img: work4 },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Studio", "#studio"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <a href="#top" className="font-display text-[11px] tracking-brutal text-foreground">
          C. Civantos
        </a>
        <ul className="hidden gap-10 md:flex">
          {items.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="font-display text-[10px] tracking-brutal text-muted-foreground transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#work"
          className="font-display text-[10px] tracking-brutal text-foreground transition-colors hover:text-accent"
        >
          Listen
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Grand piano in a dimly lit studio"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <span className="font-display text-[10px] tracking-brutal text-accent">Portfolio · MMXXV</span>
        <h1 className="mt-8 font-display text-[14vw] leading-[0.9] text-foreground md:text-[8.5vw]">
          Carlos
          <br />
          Civantos
        </h1>
        <p className="mt-10 max-w-md text-sm font-light tracking-[0.18em] text-muted-foreground uppercase">
          Composer · Pianist · Synthesist
        </p>

        <a
          href="#work"
          className="group mt-16 inline-flex items-center gap-4 border border-border/60 px-8 py-4 transition-colors hover:border-accent"
        >
          <Play className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
          <span className="font-display text-[10px] tracking-brutal text-foreground transition-colors group-hover:text-accent">
            Listen
          </span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-display text-[9px] tracking-brutal text-muted-foreground">
        Scroll
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative w-full border-t border-border/30 py-32 md:py-48">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-24 md:px-12">
        <div className="reveal md:col-span-6">
          <span className="font-display text-[10px] tracking-brutal text-accent">01 — About</span>
          <h2 className="mt-8 font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
            A pianist
            <br />
            writing for
            <br />
            <span className="text-muted-foreground">picture.</span>
          </h2>
          <div className="mt-12 h-px w-16 bg-accent" />
          <p className="mt-12 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            Pianist and film composer working between jazz piano and analog synthesis.
            Currently studying at HKU Utrecht. Scoring for image, building textures from
            instruments that breathe.
          </p>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            Quiet rooms. Long takes. A few good machines.
          </p>
        </div>

        <div className="reveal md:col-span-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={about}
              alt="Hands playing a piano in low light"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  work,
  onOpen,
}: {
  work: (typeof works)[number];
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="reveal group relative block aspect-[4/5] w-full overflow-hidden text-left"
    >
      <img
        src={work.img}
        alt={work.title}
        loading="lazy"
        width={1280}
        height={1600}
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-background/30 transition-opacity duration-500 group-hover:bg-background/65" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="font-display text-[10px] tracking-brutal text-accent">{work.year}</span>
          <ArrowUpRight
            className="h-4 w-4 text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-accent"
            strokeWidth={1.25}
          />
        </div>
        <h3 className="mt-4 font-display text-3xl text-foreground md:text-4xl">{work.title}</h3>
        <p className="mt-3 max-w-xs translate-y-2 text-xs font-light tracking-widest uppercase text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {work.kind}
        </p>
      </div>
    </button>
  );
}

function WorkModal({
  work,
  onClose,
}: {
  work: (typeof works)[number] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 px-6 py-12 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center border border-border/60 text-foreground transition-colors hover:border-accent hover:text-accent"
        aria-label="Close"
      >
        <X className="h-4 w-4" strokeWidth={1.25} />
      </button>

      <div
        className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-square w-full overflow-hidden">
          <img src={work.img} alt={work.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-display text-[10px] tracking-brutal text-accent">{work.year} · {work.kind}</span>
          <h3 className="mt-6 font-display text-5xl text-foreground md:text-6xl">{work.title}</h3>
          <div className="mt-8 h-px w-12 bg-accent" />
          <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            An excerpt from the score. Built around piano, modular textures and a small string section
            recorded in a single afternoon.
          </p>

          <div className="mt-10 border border-border/60 p-5">
            <div className="flex items-center gap-4">
              <button
                className="flex h-10 w-10 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Play preview"
              >
                <Play className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
              <div className="flex-1">
                <div className="h-px w-full bg-border">
                  <div className="h-px w-1/3 bg-accent" />
                </div>
                <div className="mt-2 flex justify-between font-display text-[9px] tracking-brutal text-muted-foreground">
                  <span>00:42</span>
                  <span>02:18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [active, setActive] = useState<(typeof works)[number] | null>(null);

  return (
    <section id="work" className="relative w-full border-t border-border/30 py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-[10px] tracking-brutal text-accent">02 — Selected Work</span>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
              Portfolio
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light text-muted-foreground">
            A small selection of recent scores and recordings.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 md:gap-x-16 md:gap-y-32">
          {works.map((w, i) => (
            <div key={w.title} className={i % 2 === 1 ? "sm:mt-24" : ""}>
              <WorkCard work={w} onOpen={() => setActive(w)} />
            </div>
          ))}
        </div>
      </div>

      <WorkModal work={active} onClose={() => setActive(null)} />
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="relative w-full border-t border-border/30 py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="reveal max-w-3xl">
          <span className="font-display text-[10px] tracking-brutal text-accent">03 — Studio</span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
            The room
            <br />
            <span className="text-muted-foreground">is the instrument.</span>
          </h2>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <div className="reveal md:col-span-8">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={studio2}
                alt="Composer studio with synthesizers and mixing desk"
                loading="lazy"
                width={1920}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal md:col-span-4 md:pt-24">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={studio1}
                alt="Vintage Moog and Prophet synthesizers"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-8 max-w-xs text-xs font-light tracking-widest uppercase text-muted-foreground">
              Moog · Prophet-10 · JD-800
              <br />
              Super Gemini · Grand Piano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative flex w-full items-center justify-center border-t border-border/30 px-6 py-32"
    >
      <div className="reveal mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="font-display text-[10px] tracking-brutal text-accent">04 — Contact</span>
        <h2 className="mt-8 font-display text-5xl leading-[0.95] text-foreground md:text-8xl">
          Let&apos;s create
          <br />
          something
          <br />
          <span className="text-muted-foreground">together.</span>
        </h2>

        <div className="mt-16 h-px w-12 bg-accent" />

        <a
          href="mailto:hello@carloscivantos.com"
          className="mt-12 font-display text-base tracking-brutal text-foreground transition-colors hover:text-accent md:text-2xl"
        >
          hello@carloscivantos.com
        </a>

        <div className="mt-12 flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center border border-border/60 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.25} />
          </a>
          <a
            href="mailto:hello@carloscivantos.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center border border-border/60 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="h-4 w-4" strokeWidth={1.25} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <span className="font-display text-[9px] tracking-brutal text-muted-foreground">
          © {new Date().getFullYear()} Carlos Civantos
        </span>
        <span className="font-display text-[9px] tracking-brutal text-muted-foreground">
          Utrecht · NL
        </span>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Studio />
      <Contact />
      <Footer />
    </main>
  );
}
