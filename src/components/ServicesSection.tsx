import { Check } from "lucide-react";

const services = [
  "Прання килимів",
  "Професійне сушіння",
  "Хімчистка килимів",
  "Очищення ворсу",
  "Видалення плям та запахів",
  "Антибактеріальна обробка",
  "Відновлення кольору килимів",
  "Видалення шерсті та волосся",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Наші послуги
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Повний комплекс послуг
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Професійний догляд за вашими килимами з використанням сучасного обладнання та екологічних засобів
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service}
              className="group bg-card p-5 rounded-xl shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-success group-hover:scale-110 transition-all">
                  <Check className="w-4 h-4 text-success group-hover:text-success-foreground" />
                </div>
                <span className="font-medium text-foreground">{service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
