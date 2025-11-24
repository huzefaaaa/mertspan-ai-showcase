import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 sm:py-20 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Mertspan</h3>
            <p className="text-primary-foreground/60 max-w-md text-sm leading-relaxed">
              Empowering businesses through intelligent AI solutions. 
              Transform your operations with cutting-edge technology.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium text-primary-foreground/50 uppercase tracking-wider mb-6">Contact</h4>
            
            <div className="space-y-4">
              <a
                href="tel:+447393993313"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+44 7393 993313</span>
              </a>

              <a
                href="mailto:mertspanforms@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>mertspanforms@gmail.com</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2.5 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2.5 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2.5 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Mertspan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
