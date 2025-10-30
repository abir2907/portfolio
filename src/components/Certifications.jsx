import { certifications } from "../data/certifications";

const Certifications = () => (
  <section id="certifications" className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
    {/* Glossy liquid background */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary -z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-neon/5 -z-10"></div>
    <div className="absolute inset-0 backdrop-blur-3xl -z-10"></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent mb-8 sm:mb-12 animate-fade-in">
        Licenses & Certifications
      </h2>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map(({ name, link }, index) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-effect rounded-2xl p-5 sm:p-6 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-lg sm:text-xl text-neon">🏆</span>
              <h4 className="font-semibold text-sm sm:text-base text-accent leading-snug">{name}</h4>
            </div>
            <div className="glass-effect rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-accent/20 hover:scale-110 transition-all duration-300">
              <span className="text-accent text-xs sm:text-sm font-medium hover:text-neon transition-colors duration-300">
                View Certificate
              </span>
              <span className="text-accent transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
