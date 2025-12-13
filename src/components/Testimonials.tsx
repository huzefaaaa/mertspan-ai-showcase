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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <p className="text-muted-foreground text-xs font-medium mb-4 uppercase tracking-wider">
            Client Results
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Proven Track Record
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border p-10 rounded-xl"
            >
              <p className="text-foreground/80 text-base mb-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-xs">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
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
