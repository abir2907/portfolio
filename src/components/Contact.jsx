import {
  LinkedInIcon,
  GitHubIcon,
  LeetCodeIcon,
  KaggleIcon,
  GFGIcon,
} from "./SocialIcons";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:abirchodha1@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 px-4 overflow-hidden"
    >
      {/* Glossy liquid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-neon/5 -z-10"></div>
      <div className="absolute inset-0 backdrop-blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:items-start">
          <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in h-full">
            <div className="glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-base font-semibold text-neon min-w-[60px]">
                    Email:
                  </span>
                  <a
                    href="mailto:abirchodha1@gmail.com"
                    className="text-sm sm:text-base hover:text-neon transition-colors break-all"
                  >
                    abirchodha1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-base font-semibold text-neon min-w-[60px]">
                    Phone:
                  </span>
                  <a
                    href="tel:+919661384853"
                    className="text-sm sm:text-base hover:text-neon transition-colors"
                  >
                    +91 96613 84853
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-base font-semibold text-neon min-w-[60px]">
                    Location:
                  </span>
                  <span className="text-sm sm:text-base">
                    Kolkata, West Bengal
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent">
                Connect With Me
              </h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/abir-chodha-46a983298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 glass-effect rounded-xl hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                >
                  <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://github.com/abir2907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 glass-effect rounded-xl hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                >
                  <GitHubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://leetcode.com/u/abirrr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 glass-effect rounded-xl hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                >
                  <LeetCodeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.kaggle.com/abirchodha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 glass-effect rounded-xl hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                >
                  <KaggleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/abirchc1ky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 glass-effect rounded-xl hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                >
                  <GFGIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in h-full flex flex-col"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 sm:px-4 py-2 glass-effect border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm sm:text-base"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 sm:px-4 py-2 glass-effect border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm sm:text-base"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-3 sm:px-4 py-2 glass-effect border border-border rounded-xl focus:outline-none focus:border-accent transition-colors resize-none text-sm sm:text-base"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="liquid-button w-full py-2.5 sm:py-3 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-accent to-neon text-white text-sm sm:text-base hover:shadow-lg mt-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
