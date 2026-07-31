import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import { navLinks } from "@/data/site";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return location === "/";
      return location.startsWith(href);
    },
    [location]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "glass border-b border-white/5"
          : "bg-transparent"
        }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/HR_Assitant/logo.png"
            alt="Logo"
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display font-bold text-lg tracking-tight">
            <span className="text-white">AI</span>
            <span className="text-gold">.</span>
            <span className="text-muted-foreground font-normal ml-1 hidden sm:inline">
              Engineer
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                      ? "text-gold"
                      : "text-muted-foreground hover:text-white"
                    }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-px bg-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <ul className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)}>
                    <span
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive(link.href)
                          ? "text-gold bg-gold/5"
                          : "text-muted-foreground hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="container py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/HR_Assitant/logo.png"
              alt="Logo"
              className="w-6 h-6"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Engineer. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/khandaniyal14-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daniyal-khan-760411218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Khandaniyal1144@gmail.com"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-card px-4 py-3 transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:shadow-lg hover:shadow-gold/10"
            >

              <div className="text-left">
                
                <p className="text-sm font-medium text-foreground">
                  Khandaniyal1144@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-gold/20 text-gold hover:bg-gold/10 transition-all duration-300 hover:glow-gold"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 transition-all duration-300 hover:glow-gold"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
