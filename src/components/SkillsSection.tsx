
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SkillsSection = () => {
  const skillCategories = [
    {
      id: "frontend",
      name: "ផ្នែកខាងមុខ",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      id: "backend",
      name: "ផ្នែកខាងក្រោយ",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "REST API", level: 88 },
      ],
    },
    {
      id: "tools",
      name: "ឧបករណ៍",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Chrome DevTools", level: 88 },
      ],
    },
    {
      id: "soft",
      name: "ជំនាញទន់",
      skills: [
        { name: "ការដោះស្រាយបញ្ហា", level: 95 },
        { name: "ការធ្វើការជាក្រុម", level: 90 },
        { name: "ការទំនាក់ទំនង", level: 85 },
        { name: "ការគ្រប់គ្រងពេលវេលា", level: 80 },
        { name: "ភាពច្នៃប្រឌិត", level: 88 },
      ],
    },
  ];

  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding bg-accent/20">
      <h2 className="section-heading">ជំនាញរបស់ខ្ញុំ</h2>
      
      <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-center">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, idx) => (
                <Card 
                  key={`${category.id}-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    activeCard === `${category.id}-${idx}` ? 'shadow-lg shadow-primary/10' : ''
                  } card-hover`}
                  onMouseEnter={() => setActiveCard(`${category.id}-${idx}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: activeCard === `${category.id}-${idx}` ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>បទពិសោធន៍</span>
                        <span className="font-medium">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className={`mt-4 text-sm transition-opacity duration-300 ${
                      activeCard === `${category.id}-${idx}` ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <p className="text-muted-foreground text-center">
                        ខ្ញុំមានបទពិសោធន៍ច្រើន​ក្នុងការប្រើប្រាស់ {skill.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
