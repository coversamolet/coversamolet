import { Truck, Package, Sparkles, Home } from "lucide-react";

const steps = [
  {
    icon: Truck,
    title: "Приїхали",
    description: "Приїжджаємо до вашого під'їзду у зручний час",
    color: "primary",
  },
  {
    icon: Package,
    title: "Забрали",
    description: "Забираємо килими та інші речі для прання",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Попрали",
    description: "Професійно пралимо та сушимо ваші речі",
    color: "success",
  },
  {
    icon: Home,
    title: "Привезли",
    description: "Доставляємо чисті та свіжі килими додому",
    color: "accent",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-semibold mb-4">
            🚚 Як ми працюємо
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Простий процес у 4 кроки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Вам не потрібно нікуди їхати — ми все зробимо самі
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-success" />
            
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center group">
                  {/* Step number */}
                  <div className="relative mb-4">
                    <div className={`w-24 h-24 rounded-2xl bg-${step.color === 'primary' ? 'primary' : step.color === 'secondary' ? 'secondary' : step.color === 'success' ? 'success' : 'accent'}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-10 h-10 ${step.color === 'primary' ? 'text-primary' : step.color === 'secondary' ? 'text-secondary-foreground' : step.color === 'success' ? 'text-success' : 'text-accent-foreground'}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-hero text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-glow">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
