import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center animate-fade-in">
          {/* Company Name */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-elegant font-bold text-primary-foreground mb-8 tracking-tight">
            Mertspan
          </h1>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-elegant font-medium text-primary-foreground mb-12">
            AI That Actually Grows Your Business
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            We build AI tools that save you time, increase sales, and cut costs. 
            Simple solutions that work for your business.
          </p>

          {/* Limited Availability Notice */}
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-12 border border-luxury/30 bg-luxury/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-luxury rounded-full animate-pulse" />
            <p className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Limited Availability: 5 Clients Per Month
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary-foreground text-primary font-semibold px-10 py-6 text-base hover:bg-primary-foreground/90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
