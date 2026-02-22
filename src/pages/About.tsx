import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle2, Code2, Lightbulb, Rocket } from "lucide-react";

const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js"];

const values = [
  {
    title: "Clean Code",
    description: "Menulis kode yang mudah dibaca, dipelihara, dan skalabel.",
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "User Centric",
    description: "Fokus pada pengalaman pengguna yang intuitif dan aksesibel.",
    icon: <Lightbulb className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "Fast Delivery",
    description: "Efisiensi dalam development tanpa mengorbankan kualitas.",
    icon: <Rocket className="w-5 h-5 text-purple-600" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
            
            {/* Header Section */}
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-slate-900">About Me</h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Kolom Kiri: Brief Bio & Skills */}
            <div className="space-y-8">
                <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800">Brief Bio</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                    Saya adalah seorang pengembang perangkat lunak yang bersemangat dengan pengalaman lebih dari 5 tahun dalam membangun solusi web. 
                    Perjalanan saya dimulai dari rasa penasaran bagaimana internet bekerja, hingga kini fokus pada ekosistem **Modern JavaScript**.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Saya percaya bahwa teknologi terbaik adalah teknologi yang mampu menyelesaikan masalah nyata dengan cara yang paling sederhana.
                </p>
                </div>

                <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-white px-3 py-1 text-sm border-blue-100 text-blue-700">
                        {skill}
                    </Badge>
                    ))}
                </div>
                </div>
            </div>

            {/* Kolom Kanan: Key Values */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Values</h3>
                <div className="grid gap-4">
                {values.map((item, index) => (
                    <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="p-2 bg-slate-100 rounded-lg shrink-0">
                        {item.icon}
                        </div>
                        <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-snug">{item.description}</p>
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
}