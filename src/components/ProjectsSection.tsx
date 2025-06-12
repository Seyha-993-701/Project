
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  // Project categories
  const categories = ["ទាំងអស់", "គេហទំព័រ", "ទូរសព្ទ", "ប្រព័ន្ធក្រោយ"];
  const [activeCategory, setActiveCategory] = useState("ទាំងអស់");

  const projects = [
    {
      id: 1,
      title: "កម្មវិធីគេហទំព័រគ្រប់គ្រងហាង",
      description: "កម្មវិធីគេហទំព័រសម្រាប់គ្រប់គ្រងហាងលក់ទំនិញ ជាមួយប្រព័ន្ធគ្រប់គ្រងទំនិញ និងការលក់",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "គេហទំព័រ",
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 2,
      title: "កម្មវិធីទូរសព្ទកម្មង់អាហារ",
      description: "កម្មវិធីទូរសព្ទសម្រាប់បញ្ជាទិញអាហារពីភោជនីយដ្ឋាននានា ជាមួយប្រព័ន្ធតាមដានការដឹកជញ្ជូន",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      technologies: ["React Native", "Firebase", "Stripe"],
      category: "ទូរសព្ទ",
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 3,
      title: "ប្រព័ន្ធគ្រប់គ្រងសិស្ស",
      description: "ប្រព័ន្ធគ្រប់គ្រងសិស្សនិស្សិតសម្រាប់សាលារៀនឬសាកលវិទ្យាល័យ ជាមួយនឹងការគ្រប់គ្រងពិន្ទុ និងវត្តមាន",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      technologies: ["Angular", "Node.js", "PostgreSQL"],
      category: "គេហទំព័រ",
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 4,
      title: "API គ្រប់គ្រងការលក់ទំនិញតាមអនឡាញ",
      description: "ប្រព័ន្ធ API សម្រាប់គ្រប់គ្រងការលក់ទំនិញតាមអនឡាញ ជាមួយប្រព័ន្ធការបង់ប្រាក់ និងការផ្ញើសារ",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      technologies: ["Express.js", "MongoDB", "Redis"],
      category: "ប្រព័ន្ធក្រោយ",
      githubLink: "#",
      liveLink: "#",
    },
  ];

  // Filter projects by category
  const filteredProjects = activeCategory === "ទាំងអស់"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <h2 className="section-heading">គម្រោងរបស់ខ្ញុំ</h2>
      
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden card-hover border-t-4 border-t-primary">
            <div className="aspect-video overflow-hidden bg-accent/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> កូដ
                </a>
              </Button>
              <Button asChild size="sm">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> មើល
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="rounded-full">
          មើលគម្រោងទាំងអស់
        </Button>
      </div>
    </section>
  );
};
