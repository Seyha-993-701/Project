
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Twitter } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "កំហុស",
        description: "សូម​បំពេញ​ព័តមាន​ទាំងអស់​មុន​ពេល​ផ្ញើ",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "កំហុស",
        description: "សូមបញ្ចូលអ៊ីមែលឱ្យបានត្រឹមត្រូវ",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      console.log("Form submitted:", formData);
      
      toast({
        title: "ជោគជ័យ",
        description: "សាររបស់អ្នកត្រូវបានផ្ញើជោគជ័យ! ខ្ញុំនឹងឆ្លើយតបឱ្យបានឆាប់",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/username",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/username",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/username",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <h2 className="section-heading">ទំនាក់ទំនង</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">ចង់និយាយជាមួយខ្ញុំ?</h3>
          <p className="text-lg text-muted-foreground">
            ប្រសិនបើអ្នកមានសំណួរ ឬចង់ពិភាក្សាអំពីគម្រោងសហការណាមួយ សូមផ្ញើសារមកខ្ញុំ ហើយខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។
          </p>
          
          <div className="space-y-2">
            <p className="font-medium">អ៊ីមែល</p>
            <a href="mailto:contact@example.com" className="text-primary hover:underline">
              contact@example.com
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="font-medium">ទូរសព្ទ</p>
            <a href="tel:+85512345678" className="text-primary hover:underline">
              +៨៥៥ ១២ ៣៤៥ ៦៧៨
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="font-medium">បណ្តាញសង្គម</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-accent/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-medium">
                ឈ្មោះ
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="សូមបញ្ចូលឈ្មោះរបស់អ្នក"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                អ៊ីមែល
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="សូមបញ្ចូលអ៊ីមែលរបស់អ្នក"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block font-medium">
                សារ
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="សូមបញ្ចូលសាររបស់អ្នក"
                rows={5}
                disabled={isSubmitting}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "កំពុងផ្ញើ..." : "ផ្ញើសារ"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
