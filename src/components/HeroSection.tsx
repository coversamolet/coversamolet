import { Phone, Truck, Shield, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-warm" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Працюємо цілий рік у будь-яку погоду
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Професійне{" "}
            <span className="text-gradient">прання килимів</span>
            <br />
            у Дніпрі
          </h1>

          {/* Price badge */}
          <div className="inline-block bg-gradient-hero text-primary-foreground px-8 py-4 rounded-2xl shadow-glow mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold">100</span>
              <span className="text-xl">грн / м²</span>
            </div>
            <p className="text-sm opacity-90 mt-1">довгий ворс — 120 грн</p>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Хімчистка та стирка ковров з безкоштовною доставкою по всьому місту.
            Гарантуємо чистоту та свіжість!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="tel:+380505698478"
              className="inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-glow hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              Замовити прання
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 bg-card border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-colors"
            >
              Як ми працюємо
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-success" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Безкоштовна</p>
                <p className="text-sm text-muted-foreground">доставка</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Гарантія</p>
                <p className="text-sm text-muted-foreground">якості</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">10+ років</p>
                <p className="text-sm text-muted-foreground">досвіду</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
