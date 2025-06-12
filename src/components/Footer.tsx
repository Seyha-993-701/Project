
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="text-2xl font-bold text-primary mb-6">
            <span className="text-foreground">ណាន-</span>
            <span>សីហា</span>
          </a>
          
          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li><a href="#home" className="hover:text-primary transition-colors">ទំព័រដើម</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">អំពីខ្ញុំ</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">ជំនាញ</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">គម្រោង</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">ប្លក់</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">ទំនាក់ទំនង</a></li>
            </ul>
          </div>
          
          <div className="flex space-x-6 mb-10">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-muted-foreground">
            <p>© {currentYear} ណាន​ សីហា រក្សាសិទ្ធិគ្រប់យ៉ាង</p>
          </div>
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full opacity-80 hover:opacity-100 bg-background/80 backdrop-blur"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="ទៅ​ខាងលើ"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </Button>
    </footer>
  );
};
