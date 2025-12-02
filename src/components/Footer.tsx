import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">
              PT. Sukses Ekspor Mandiri
            </h3>
            <p className="font-work text-primary-foreground/80 mb-4">
              Trusted Supplier Partner in Coconut and Palm Derivatives
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-work font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-work">
              <li>
                <NavLink to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/why-choose-us" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Why Choose Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-work font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 font-work text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Malang, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:suksesekspormandiri@gmail.com" className="hover:text-accent transition-colors">
                  suksesekspormandiri@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="https://wa.me/6285124480871" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +62 851-2448-0871
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-work font-semibold text-lg mb-4">Follow Us</h4>
            <div className="space-y-2 font-work">
              <a 
                href="https://www.linkedin.com/company/pt-sukses-ekspor-mandiri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                LinkedIn: PT. Sukses Ekspor Mandiri
              </a>
              <a 
                href="https://www.facebook.com/suksesekspormandiri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Facebook: PT. Sukses Ekspor Mandiri
              </a>
              <a 
                href="https://www.instagram.com/suksesekspormandiri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Instagram: @SuksesEksporMandiri
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center font-work text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} PT. Sukses Ekspor Mandiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
