import { LinkedInIcon, GitHubIcon, LeetCodeIcon, KaggleIcon, GFGIcon } from './SocialIcons';

const Footer = () => (
  <footer className="bg-secondary/80 backdrop-blur-sm w-full py-8 mt-12 text-center text-text border-t border-accent/20">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
      <span className="text-sm text-text/80">&copy; {new Date().getFullYear()} Abir Chodha. All Rights Reserved.</span>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/abirchodha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-accent hover:text-neon transform hover:scale-125 transition-all duration-300">
          <LinkedInIcon className="w-6 h-6" />
        </a>
        <a href="https://github.com/abir2907" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-accent hover:text-neon transform hover:scale-125 transition-all duration-300">
          <GitHubIcon className="w-6 h-6" />
        </a>
        <a href="https://leetcode.com/u/abirrr/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-accent hover:text-neon transform hover:scale-125 transition-all duration-300">
          <LeetCodeIcon className="w-6 h-6" />
        </a>
        <a href="https://www.kaggle.com/abirchodha" target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className="text-accent hover:text-neon transform hover:scale-125 transition-all duration-300">
          <KaggleIcon className="w-6 h-6" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/abirchc1ky/" target="_blank" rel="noopener noreferrer" aria-label="GFG" className="text-accent hover:text-neon transform hover:scale-125 transition-all duration-300">
          <GFGIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
