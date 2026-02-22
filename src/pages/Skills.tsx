import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Layout, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    skills: ["React / Next.js","TypeScript","Tailwind CSS","Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-emerald-500" />,
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST API & GraphQL", "Authentication (Auth.js)"],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    skills: ["Git & GitHub",  "Docker",  "Vercel / AWS",  "CI/CD Pipelines",] ,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-[95vh] py-14 bg-gradient-to-r from-slate-700 to-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50">Technical Skills</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
          A tech stack combined to build fast, secure, and scalable applications.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-slate-100 shadow-sm hover:border-blue-200 transition-all duration-300 w-full md:w-[45%] lg:w-[30%] p-6 rounded-xl">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="p-2 bg-slate-50 rounded-lg">
                    {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {category.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-slate-700">{skill}</span>
                        </div>
                        <div className="h-2 bg-slate-950 rounded-full"></div>
                    </div>
                    ))}
                </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}