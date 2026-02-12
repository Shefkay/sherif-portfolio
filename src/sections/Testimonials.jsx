import { Quote } from "lucide-react";
const testimonials = [
  {
    quote: "Sherif is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen"
  },
  {
    quote: "Working with Sherif was a game-changer for our project, He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez"
  },
  {
    quote: "Sherif expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson"
  },
  {
    quote: "Not only is Sherif technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim"
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-11/12" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">"{testimonials[0].quote}"</blockquote>

              <div>
                <div>{testimonials[0].author}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}