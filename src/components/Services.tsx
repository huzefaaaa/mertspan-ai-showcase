import { Brain, Zap, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Tailored AI Solutions",
    subtitle: "Custom AI Builds",
    description:
      "Custom AI systems engineered for your business needs. Seamlessly integrate with existing processes to automate complex tasks and drive strategic decisions.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Lead Response",
    subtitle: "Speed to Lead",
    description:
      "AI-powered systems that respond to inquiries instantly, 24/7. Dramatically improve conversion rates while your team focuses on closing deals.",
  },
  {
    icon: FileText,
    title: "Smart Invoice Automation",
    subtitle: "Automated Invoice System",
    description:
      "Intelligent invoicing that generates, sends, and tracks automatically. Reduce errors, save hours, and get paid faster with automated follow-ups.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-20">
          How We Help You Win
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-foreground/20 transition-colors border bg-card"
            >
              <CardHeader className="space-y-4">
                <div className="text-foreground/80">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <p className="text-sm font-medium text-foreground/60">
                  {service.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
