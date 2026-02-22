import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CalendarDays, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Corp",
    timeline: "2021 - Present",
    responsibilities: [
      "Lead the development of scalable web applications using React and Node.js.",
      "Optimized database performance, resulting in a 30% reduction in query response time.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Mentored junior developers and conducted code reviews to ensure high-quality standards."
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Creative Digital Agency",
    timeline: "2019 - 2021",
    responsibilities: [
      "Built and maintained responsive websites for various clients using HTML, CSS, and JavaScript.",
      "Assisted in the migration of legacy systems to modern frontend frameworks.",
      "Implemented SEO best practices, increasing organic traffic by 20% for client sites.",
      "Integrated third-party APIs for payment gateways and social media platforms."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-[95vh] py-14 bg-gradient-to-r from-slate-700 to-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50">Professional Experience</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A summary of my professional journey and contributions in full-stack development.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600 shadow-slate-100">
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold text-slate-900">{exp.title}</CardTitle>
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit flex items-center gap-2 px-3 py-1">
                  <CalendarDays className="w-4 h-4" />
                  {exp.timeline}
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-5 space-y-2 text-slate-600">
                  {exp.responsibilities.map((task, tIndex) => (
                    <li key={tIndex} className="leading-relaxed">
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}