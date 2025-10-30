import { services } from "../data/services";

const Services = () => (
  <section id="services" className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
    {/* Glossy liquid background */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary -z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent/5 to-neon/5 -z-10"></div>
    <div className="absolute inset-0 backdrop-blur-3xl -z-10"></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent mb-8 sm:mb-12 animate-fade-in">
        Services
      </h2>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {services.map(({ title, description }, index) => (
          <div 
            key={title} 
            className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl sm:text-3xl text-neon">{index === 0 ? '💻' : index === 1 ? '🔧' : index === 2 ? '🎨' : '🔗'}</span>
              <h3 className="text-accent text-xl sm:text-2xl font-bold">{title}</h3>
            </div>
            <p className="text-text/80 leading-relaxed text-sm sm:text-base">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
