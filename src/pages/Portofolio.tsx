import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Analytics Dashboard",
    brief: "A real-time data visualization platform for online retailers to track sales and inventory.",
    tech: ["Next.js", "TypeScript", "Recharts", "Prisma"],
    star: {
      situation: "Retailers struggled to visualize complex sales data from multiple sources.",
      task: "Create an intuitive dashboard that processes 10k+ transactions per hour.",
      action: "Developed a custom data-fetching hook with SWR and optimized SQL queries for sub-second response times.",
      result: "Increased client reporting efficiency by 40% and reduced page load time by 60%."
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    github: "https://github.com/MichaelOsr"
  },
  
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="min-h-[95vh] py-14 bg-slate-50/50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A showcase of my recent work, highlighting technical challenges and measurable results.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden px-4 shadow-xl bg-white">
              <div className="grid lg:grid-cols-2">
                {/* Visuals */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                </div>

                <div className="p-8 space-y-6">
                  <CardHeader className="p-0 space-y-2">
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    <p className="text-slate-600 italic">{project.brief}</p>
                  </CardHeader>

                  {/* STAR Method Implementation */}
                  <CardContent className="p-0 space-y-4">
                    <div className="grid gap-3 text-sm">
                      <p><strong>Situation:</strong> {project.star.situation}</p>
                      <p><strong>Task:</strong> {project.star.task}</p>
                      <p><strong>Action:</strong> {project.star.action}</p>
                      <p><strong>Result:</strong> {project.star.result}</p>
                    </div>

                    {/* Relevant Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-0">
                    <Button variant="outline" className="gap-2">
                      <Github className="w-4 h-4" /> 
                      <a target="_blank" href={project.github}>
                        Repository
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}