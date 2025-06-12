
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "របៀបបង្កើតគេហទំព័រដែលឆ្លើយតបជាមួយ Tailwind CSS",
      excerpt: "រៀនពីរបៀបបង្កើតគេហទំព័រដែលដំណើរការល្អលើឧបករណ៍គ្រប់ប្រភេទដោយប្រើ Tailwind CSS ជាមួយនឹងឧទាហរណ៍ជាក់ស្តែង",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      date: "១៥ មេសា ២០២៥",
      tags: ["Tailwind CSS", "Responsive Design"],
      link: "#",
    },
    {
      id: 2,
      title: "បង្កើត API ដោយប្រើ Node.js និង Express",
      excerpt: "ស្វែងយល់ពីរបៀបបង្កើត API ដែលមានដំណើរការល្អនិងមានសុវត្ថិភាពខ្ពស់ជាមួយ Node.js, Express និង MongoDB",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      date: "០៨ មេសា ២០២៥",
      tags: ["Node.js", "API", "Express"],
      link: "#",
    },
    {
      id: 3,
      title: "ការប្រើប្រាស់ React Hooks ឱ្យមានប្រសិទ្ធិភាព",
      excerpt: "កំណត់ត្រាអំពីរបៀបប្រើប្រាស់ React Hooks ដូចជា useState, useEffect, useCallback និង useMemo ឱ្យមានប្រសិទ្ធិភាព",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      date: "០២ មេសា ២០២៥",
      tags: ["React", "JavaScript", "Hooks"],
      link: "#",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-accent/20">
      <h2 className="section-heading">អត្ថបទ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col card-hover">
            <div className="aspect-video overflow-hidden bg-muted/30">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <CardContent className="p-6 flex-grow">
              <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="px-6 pb-6 pt-0">
              <Button asChild variant="ghost" className="w-full">
                <a href={post.link}>អានបន្ថែម</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a href="/blog">មើលអត្ថបទទាំងអស់</a>
        </Button>
      </div>
    </section>
  );
};
