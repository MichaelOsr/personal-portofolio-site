import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    quote: "Working with this developer was a game-changer for our platform. The attention to detail in the full-stack implementation exceeded our expectations, especially the performance optimization.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    quote: "A highly professional developer who understands both the technical and business sides of a project. The delivery was on time and the code quality is top-notch. Highly recommended!",
    initials: "MC"
  },
  {
    name: "Emily Davis",
    role: "Freelance Client",
    quote: "The result was exactly what I was looking for. The communication was excellent throughout the development process, and the final impact on my site's user engagement was immediate.",
    initials: "ED"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-[95vh] py-14 bg-slate-50/50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What Clients Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="border-none shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <Quote className="w-10 h-10 text-blue-100 fill-blue-50" />
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 italic leading-relaxed">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <Avatar>
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-bold text-slate-900 text-sm">{item.name}</h2>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}