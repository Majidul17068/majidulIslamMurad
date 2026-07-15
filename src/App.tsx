import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Leadership } from "./components/Leadership";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app-shell min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-[var(--accent-20)] selection:text-[var(--accent)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent)] focus:text-[var(--on-accent)] focus:font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 h-full">
            <Hero />
          </div>
          <div className="lg:col-span-4 h-full">
            <About />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 h-full">
            <Projects />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Experience />
            <Research />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 h-full">
            <Expertise />
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <TechStack />
            <Leadership />
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

