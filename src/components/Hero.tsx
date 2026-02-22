import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Download } from "lucide-react"; // Menggunakan Lucide (bawaan Shadcn)

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-r from-slate-700 to-slate-900"
    >
      {/* Efek Background (Opsional untuk estetika) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.05)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Konten Teks */}
        <div className="space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-left-5 duration-1000">
          <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
            Available for New Projects
          </Badge>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950">
              Hi, I'm <span className="text-blue-700 underline decoration-blue-300">Michael Octavian</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Full-Stack Web Developer
            </h2>
          </div>

          <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build high-performance, accessible, and visually stunning web applications 
            using modern technologies. Focused on creating seamless user experiences 
            with React and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Download CV <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Foto Profesional */}
        <div className="relative flex justify-center items-center animate-in fade-in slide-in-from-right-5 duration-1000">
          {/* Ornamen di belakang foto */}
          <div className="absolute w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-white shadow-2xl rounded-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="src\assets\profil.png" 
              alt="Professional Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}