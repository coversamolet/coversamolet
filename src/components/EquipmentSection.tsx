import { Droplets, Wind, Zap } from "lucide-react";

const equipment = [
  {
    icon: Droplets,
    title: "Вижимна машина",
    description: "Ефективне видалення вологи без пошкодження волокон",
  },
  {
    icon: Wind,
    title: "Полотер для килимів",
    description: "Глибоке очищення ворсу від бруду та пилу",
  },
  {
    icon: Zap,
    title: "Керхер професійний",
    description: "Потужна очистка навіть найскладніших забруднень",
  },
];

const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            Обладнання
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Професійне обладнання
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Використовуємо сучасне обладнання для досягнення найкращих результатів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {equipment.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-gradient-warm rounded-2xl p-8 hover:shadow-large transition-all duration-300 overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
