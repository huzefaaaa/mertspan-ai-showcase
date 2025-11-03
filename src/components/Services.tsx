import { Brain, Zap, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Tailored AI Solutions",
    subtitle: "Custom AI Builds",
    description:
      "We design and develop custom AI systems specifically engineered for your unique business needs and workflows. Our solutions integrate seamlessly with your existing processes, automating complex tasks and providing intelligent insights that drive strategic decision-making.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Lead Response",
    subtitle: "Speed to Lead",
    description:
      "Never miss another opportunity with our AI-powered lead response systems. Our intelligent automation responds to inquiries instantly, 24/7, engaging potential customers at the perfect moment. Dramatically improve conversion rates while freeing your team to focus on closing deals.",
  },
  {
    icon: FileText,
    title: "Smart Invoice Automation",
    subtitle: "Automated Invoice System",
    description:
      "Revolutionize your financial operations with intelligent invoicing automation. Our AI-driven system generates, sends, and tracks invoices automatically, reducing manual errors and saving countless hours. Get paid faster with automated follow-ups and intelligent payment reminders.",
  },
];

const Services = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-accent/20 hover:border-accent/40 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-accent/80">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
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
