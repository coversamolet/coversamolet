import { Check, Package, Baby, Home, Building } from "lucide-react";

const services = [
  "Матраци (пил, плями, запахи)",
  "Ковдри та пледи",
  "Килими та килимки",
  "М'які іграшки",
  "Покривала",
  "Чохли від диванів та матраців",
];

const benefits = [
  { icon: Check, text: "Свіжість та чистота" },
  { icon: Check, text: "Охайний вигляд" },
  { icon: Check, text: "Без неприємних запахів" },
  { icon: Baby, text: "Безпечно для дітей" },
];

const ExtraServicesSection = () => {
  return (
    <section id="extra" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-semibold mb-4">
              Додаткові послуги
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Що ще ми можемо зробити?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services list */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Ми пралимо також:
              </h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="font-medium text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                  Після чистки
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.text}
                      className="flex items-center gap-2 p-3 bg-success/5 rounded-lg"
                    >
                      <benefit.icon className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target audience */}
              <div className="bg-gradient-gold rounded-2xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card/80 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-foreground mb-2">
                      Підходить для:
                    </h4>
                    <p className="text-secondary-foreground/80">
                      Дому, готелів, хостелів та орендних квартир
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border-l-4 border-primary">
                <p className="text-lg font-semibold text-foreground">
                  📞 Звертайтесь — зробимо чисто, швидко та якісно!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraServicesSection;
