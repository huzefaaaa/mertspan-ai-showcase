import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">
            Let's discuss how AI can transform your business
          </p>

          <form
            action="https://formsubmit.co/mertspanforms@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://mertspan.com" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="bg-background border-border h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="bg-background border-border h-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company
                </Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  className="bg-background border-border h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="bg-background border-border h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about your business needs..."
                rows={6}
                className="bg-background border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base rounded-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
