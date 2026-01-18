import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Послуги" },
  { href: "#process", label: "Як працюємо" },
  { href: "#equipment", label: "Обладнання" },
  { href: "#extra", label: "Додатково" },
  { href: "#contacts", label: "Контакти" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow animate-float">
              <span className="text-2xl">🧹</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg md:text-xl text-foreground">
                КОВЕР-САМОЛЕТ
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Прання килимів у Дніпрі
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Phone Button */}
          <a
            href="tel:+380505698478"
            className="hidden md:flex items-center gap-2 bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span>050-569-84-78</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-up">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-4 py-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+380505698478"
                className="flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground px-4 py-3 rounded-lg font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Зателефонувати</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
