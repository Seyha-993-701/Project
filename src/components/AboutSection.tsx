
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const milestones = [
    {
      year: "២០១៧",
      title: "បរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ",
      description: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
    },
    {
      year: "២០១៩",
      title: "បានចាប់ផ្តើមជាអ្នកអភិវឌ្ឍន៍គេហទំព័រ",
      description: "ក្រុមហ៊ុនបច្ចេកវិទ្យា ABC",
    },
    {
      year: "២០២១",
      title: "អ្នកអភិវឌ្ឍន៍ផ្នែកខាងមុខ (Frontend Developer)",
      description: "ក្រុមហ៊ុនបច្ចេកវិទ្យា XYZ",
    },
    {
      year: "២០២៣",
      title: "អ្នកអភិវឌ្ឍន៍ពេញលេញ (Full Stack Developer)",
      description: "ក្រុមហ៊ុនបច្ចេកវិទ្យាពិភពលោក",
    },
  ];

  return (
    <section id="about" className="section-padding py-20">
      <h2 className="section-heading">អំពីខ្ញុំ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            សួស្តី! ខ្ញុំឈ្មោះសុភី ជាអ្នកអភិវឌ្ឍន៍គេហទំព័រដែលមានបទពិសោធន៍៥ឆ្នាំ។ ខ្ញុំចាប់ផ្តើមសរសេរកូដតាំងពីអាយុ ១៥ ឆ្នាំ ហើយចាប់តាំងពីពេលនោះមក ខ្ញុំមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតបទពិសោធន៍ឌីជីថលដែលមានភាពទាក់ទាញនិងមានប្រយោជន៍។
          </p>
          <p className="text-lg leading-relaxed">
            ខ្ញុំមានជំនាញខាងការអភិវឌ្ឍន៍ផ្នែកខាងមុខ (Frontend) ជាមួយនឹង React, TypeScript និង Tailwind CSS ព្រមទាំងផ្នែកខាងក្រោយ (Backend) ជាមួយ Node.js និង MongoDB។ ខ្ញុំចូលចិត្តធ្វើការលើគម្រោងដែលមានផលប៉ះពាល់វិជ្ជមានលើអ្នកប្រើប្រាស់។
          </p>
          <p className="text-lg leading-relaxed">
            ក្រៅពីការសរសេរកូដ ខ្ញុំចូលចិត្តធ្វើកាហ្វេដោយខ្លួនឯងនៅពេលសរសេរកូដ និងរៀនអំពីបច្ចេកវិទ្យាថ្មីៗជានិច្ច។
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="relative mx-auto">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary transition-transform hover:scale-105 duration-300 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="សុភី​ ផលា"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-semibold mb-4">ប្រវត្តិសិក្សា និង​បទពិសោធន៍៖</h3>
            <div className="grid grid-cols-1 gap-3">
              {milestones.map((milestone, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-2 font-bold">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
