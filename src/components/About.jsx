const About = () => (
  <section
    id="about"
    className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden"
  >
    {/* Glossy liquid background */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary -z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-neon/5 -z-10"></div>
    <div className="absolute inset-0 backdrop-blur-3xl -z-10"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent mb-6 sm:mb-8 animate-fade-in">
        About
      </h2>

      {/* About Description */}
      <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 hover:shadow-neon hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
        <p className="text-base sm:text-lg md:text-xl text-center mb-6 text-text/90 leading-relaxed">
          Computer Science Engineering student at{" "}
          <span className="text-accent font-semibold">VIT-AP University</span>{" "}
          (CGPA: 9.18) with expertise in MERN/PERN stack development. Solved
          200+ DSA problems in Java and built production-ready applications with
          secure backend systems, AI integrations, and modern user interfaces.
        </p>
        <div className="text-center">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:b9148660-08d0-437a-a13e-67beced2499b"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-accent to-neon text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            <span className="relative z-10">View Resume</span>
            <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Education Section */}
      <h3 className="text-2xl sm:text-3xl font-bold text-center text-text mb-6 sm:mb-8">
        Education
      </h3>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* VIT-AP University */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in animation-delay-400">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl sm:text-3xl text-neon">🎓</span>
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-accent font-medium mb-1">
                2022 - 2026
              </p>
              <h3 className="font-bold text-base sm:text-xl text-accent mb-2">
                B.Tech in Computer Science
              </h3>
              <p className="text-text/70 leading-relaxed text-sm sm:text-base mb-3">
                VIT-AP University
              </p>
              <div className="bg-accent/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-block hover:bg-accent/30 hover:scale-110 transition-all duration-300">
                <span className="font-bold text-sm sm:text-base text-neon">
                  CGPA: 9.18
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carmel Junior College */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in animation-delay-600">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl sm:text-3xl text-neon">📚</span>
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-accent font-medium mb-1">
                2019 - 2021
              </p>
              <h3 className="font-bold text-base sm:text-xl text-accent mb-2">
                Carmel Junior College
              </h3>
              <p className="text-text/70 leading-relaxed text-sm sm:text-base mb-3">
                Jamshedpur, Jharkhand
                <br />
                <span className="font-semibold">ICSE Board</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-accent/20 backdrop-blur-sm rounded-xl px-3 py-1.5 inline-block hover:bg-accent/30 hover:scale-110 transition-all duration-300">
                  <span className="font-semibold text-xs sm:text-sm text-neon">
                    10th: 92.5%
                  </span>
                </div>
                <div className="bg-accent/20 backdrop-blur-sm rounded-xl px-3 py-1.5 inline-block hover:bg-accent/30 hover:scale-110 transition-all duration-300">
                  <span className="font-semibold text-xs sm:text-sm text-neon">
                    12th: 92.2%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
