import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[95vh] py-14 bg-gradient-to-r from-slate-700 to-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50">Get In Touch</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm currently available for freelance work or full-time positions. 
                Expect a response within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email and Social Links per Guidelines */}
              <a href="mailto:your@email.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700">your@email.com</span>
              </a>

              <div className="flex gap-4">
                <a href="https://github.com/yourusername" target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form per Guidelines */}
          <Card className="border-slate-100 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Type your message here..." className="min-h-[150px]" />
                </div>
                
                {/* CTA Button per Guidelines */}
                <Button className="w-full gap-2 py-6 text-lg" size="lg">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}