import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm max-w-xs text-slate-400">
              Building high-quality web applications with a focus on performance and user experience.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/MichaelOsr" target="_blank" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/michael-octavian-satria-raharja-82a09616a/" target="_blank" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {currentYear} Michael Octavian Satria Raharja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}