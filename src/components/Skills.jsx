import { skills } from "../data/skills";

const Skills = () => (
  <section id="skills" className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
    {/* Glossy liquid background */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary -z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-neon/5 -z-10"></div>
    <div className="absolute inset-0 backdrop-blur-3xl -z-10"></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent mb-8 sm:mb-12 animate-fade-in">
        Skills & Expertise
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {skills.map(({ category, items }, index) => (
          <div 
            key={category} 
            className="glass-effect rounded-xl p-5 sm:p-6 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2 sm:gap-3">
              {items.map(({ name }) => (
                <li
                  key={name}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect text-xs sm:text-sm font-medium text-text hover:bg-accent/20 transform hover:scale-110 transition-all duration-300"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
