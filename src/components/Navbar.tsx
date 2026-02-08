import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { to: "/", label: t('nav.home') },
    { to: "/about", label: t('nav.about') },
    { to: "/products", label: t('nav.products') },
    { to: "/why-choose-us", label: t('nav.whyChooseUs') },
    { to: "/gallery", label: t('nav.gallery') },
    { to: "/contact", label: t('nav.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/assets/logo.png" 
              alt="PT. Sukses Ekspor Mandiri Logo" 
              className="h-12 w-12 object-contain rounded-full"
            />
            <div className="font-playfair font-bold text-2xl text-primary">
              Coconut Supplier Indonesia
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="font-work text-foreground hover:text-primary transition-colors duration-300 font-medium"
                activeClassName="text-primary font-semibold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link.label}
              </NavLink>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-2 font-work text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
