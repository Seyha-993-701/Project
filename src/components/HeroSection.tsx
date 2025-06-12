
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative background-gradient overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-lg md:text-xl mb-2 text-primary animate-slide-in">
            សួស្តី! ខ្ញុំឈ្មោះ
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-delayed">
            សុភី​ ផលា
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            ជំនាញក្នុងការអភិវឌ្ឍន៍គេហទំព័រនិងកម្មវិធីទូរស័ព្ទ ដែលបង្កើតបទពិសោធន៍ប្រើប្រាស់ដ៏គួរឱ្យចាប់អារម្មណ៍
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-4 animate-fade-in">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#projects">មើលគម្រោងរបស់ខ្ញុំ</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6 group">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                ទាញយកប្រវត្តិរូបសង្ខេប
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-muted-foreground">
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
            className="h-6 w-6"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};
