import { Sparkles, Shirt, BedDouble } from "lucide-react";

const pricingItems = [
  {
    icon: Sparkles,
    title: "Прання килимів",
    price: "100",
    unit: "грн/м²",
    note: "Довгий ворс — 120 грн/м²",
    popular: true,
  },
  {
    icon: Shirt,
    title: "Прання верхнього одягу",
    price: "350",
    unit: "грн/шт",
    note: "Куртки, пальта, пуховики",
    popular: false,
  },
  {
    icon: BedDouble,
    title: "Ковдри та пледи",
    price: "300",
    unit: "грн/шт",
    note: "Глибоке очищення та сушіння",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Ціни
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Доступні ціни
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Чесні ціни без прихованих платежів. Безкоштовна доставка по всьому Дніпру!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingItems.map((item) => (
            <div
              key={item.title}
              className={`relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 ${
                item.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                  Популярне
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-xl ${item.popular ? 'bg-primary/10' : 'bg-muted'} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {item.title}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${item.popular ? 'text-primary' : 'text-foreground'}`}>
                    {item.price}
                  </span>
                  <span className="text-muted-foreground">{item.unit}</span>
                </div>
                
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
