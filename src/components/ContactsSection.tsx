import { Phone, MapPin, Clock } from "lucide-react";

const phones = [
  { number: "+380505698478", display: "050-569-84-78" },
  { number: "+380686806799", display: "068-680-67-99" },
  { number: "+380632365255", display: "063-236-52-55" },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Контакти
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Зв'яжіться з нами
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ми завжди на зв'язку! Телефонуйте для замовлення або консультації
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {phones.map((phone, index) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="group bg-gradient-warm rounded-2xl p-6 text-center hover:shadow-large hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {phone.display}
                </span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Зона обслуговування</h3>
                <p className="text-muted-foreground">
                  м. Дніпро та передмістя. Безкоштовна доставка!
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Графік роботи</h3>
                <p className="text-muted-foreground">
                  Працюємо щодня, без вихідних, у будь-яку погоду
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
