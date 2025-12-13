import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center animate-fade-in">
          {/* Limited Availability Notice */}
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full border border-primary/30 bg-primary/10">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-foreground/80 text-sm font-medium">
              Limited Availability: 5 Clients Per Month
            </p>
          </div>

          {/* Company Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-elegant font-semibold text-foreground mb-6 tracking-tight leading-tight">
            Mertspan
          </h1>

          {/* Tagline */}
          <p className="text-3xl sm:text-4xl lg:text-5xl font-elegant text-foreground/90 mb-8">
            AI That Actually Grows<br />Your Business
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            We build AI tools that save you time, increase sales, and cut costs. 
            Simple solutions that work for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground font-semibold px-8 py-6 text-base hover:bg-primary/90 transition-colors rounded-full"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground font-semibold px-8 py-6 text-base hover:bg-secondary transition-colors rounded-full"
              onClick={scrollToContact}
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
