import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-accent mb-4">Mertspan</h3>
            <p className="text-primary-foreground/80 max-w-md">
              Empowering businesses through intelligent AI solutions. 
              Transform your operations with cutting-edge technology.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-accent mb-4">Get In Touch</h4>
            
            <div className="space-y-3">
              <a
                href="tel:+447393993313"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span>+44 7393 993313</span>
              </a>

              <a
                href="mailto:mertspanforms@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <span>mertspanforms@gmail.com</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h5 className="text-sm font-medium text-primary-foreground/60 mb-3">Follow Us</h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-accent/10 hover:bg-accent hover:text-primary rounded-lg transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-accent/10 hover:bg-accent hover:text-primary rounded-lg transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-accent/10 hover:bg-accent hover:text-primary rounded-lg transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Mertspan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
