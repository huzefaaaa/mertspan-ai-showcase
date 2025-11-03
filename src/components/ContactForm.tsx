const ContactForm = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get Started
            </h2>
            <p className="text-lg text-accent">
              Let's transform your business with AI
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-8 sm:p-10 rounded-2xl shadow-2xl animate-fade-in">
            <form
              target="_blank"
              action="https://formsubmit.co/mertspanforms@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label className="block text-primary-foreground font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-accent bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-primary-foreground font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-accent bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all"
                />
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-primary-foreground font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-lg border-2 border-accent bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-primary-foreground font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+44 7393 993313"
                  className="w-full px-4 py-3 rounded-lg border-2 border-accent bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-primary-foreground font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-accent bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg text-lg transition-all hover:scale-[1.02] shadow-lg hover:shadow-accent/50"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
