const Testimonials = () => {
  const testimonials = [
    {
      quote: "We went from manually responding to leads in hours to getting back to them in under 60 seconds. Our close rate jumped 40% in the first month alone.",
      name: "Sarah M.",
      role: "Real Estate Broker",
      initials: "SM"
    },
    {
      quote: "Their AI cut our invoice processing time from 3 days to 20 minutes. I wish we'd done this sooner—it's paid for itself ten times over.",
      name: "David K.",
      role: "Construction Company Owner",
      initials: "DK"
    },
    {
      quote: "The team built us a custom chatbot that handles 80% of our customer questions. My support staff can actually focus on complex issues now instead of answering the same things all day.",
      name: "Maria L.",
      role: "E-commerce Director",
      initials: "ML"
    },
    {
      quote: "I was skeptical about AI, but they made it simple. Now our sales team has automated follow-ups and we're closing deals we used to lose. Best investment we've made.",
      name: "James T.",
      role: "Sales Manager",
      initials: "JT"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            We've worked with
            <br />
            amazing people
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
