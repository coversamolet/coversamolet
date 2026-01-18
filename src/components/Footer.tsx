import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo & tagline */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧹</span>
              </div>
              <h2 className="font-heading font-bold text-2xl">КОВЕР-САМОЛЕТ</h2>
            </div>
            <p className="text-primary-foreground/80 text-lg">
              #ЧистийКилимЗавжди
            </p>
          </div>

          {/* Quick contact */}
          <a
            href="tel:+380505698478"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform mb-8"
          >
            <Phone className="w-5 h-5" />
            Замовити зараз
          </a>

          {/* SEO Keywords (visible but styled) */}
          <div className="text-sm text-primary-foreground/60 mb-6 space-y-1">
            <p>Прання килимів Дніпро • Хімчистка ковров • Стирка ковров</p>
            <p>Прання коврів • Чистка килимів • Химчистка ковров Днепр</p>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Ковер-Самолет. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
