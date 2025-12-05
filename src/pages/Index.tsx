import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coconut.jpg";
import productCoconut from "@/assets/product-coconut.jpg";
import productShredded from "@/assets/product-shredded.jpg";
import productCharcoal from "@/assets/product-charcoal.jpg";

const Index = () => {
  const highlights = [
    {
      icon: <Award className="w-10 h-10 text-accent" />,
      title: "Premium Quality",
      description: "Stringent quality control for export-grade products",
    },
    {
      icon: <Clock className="w-10 h-10 text-accent" />,
      title: "Stable Supply",
      description: "Reliable sourcing network ensuring consistent delivery",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-accent" />,
      title: "Competitive Pricing",
      description: "Fair pricing with transparent business practices",
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: "Export-Ready Supply Chain",
      description: "Proven track record serving international markets",
    },
  ];

  const featuredProducts = [
    {
      name: "Mature Coconuts",
      image: productCoconut,
      description: "Premium quality mature coconuts for various industrial applications",
    },
    {
      name: "Shredded Coconut",
      image: productShredded,
      description: "Fresh coconut meat, finely shredded for food industry",
    },
    {
      name: "Coconut Shell Charcoal",
      image: productCharcoal,
      description: "High-quality charcoal for industrial and commercial use",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(28, 20, 13, 0.6), rgba(28, 20, 13, 0.6)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-7xl text-primary-foreground mb-6 animate-fade-in">
            Trusted Global Supplier of<br />
            Coconut & Palm Derivatives
          </h1>
          <p className="font-work text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            PT. Sukses Ekspor Mandiri - Your reliable partner for premium quality coconut and palm products from Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
            >
              WhatsApp Now
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="font-work font-semibold text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-natural transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-playfair font-semibold text-xl text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-work text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
              About PT. Sukses Ekspor Mandiri
            </h2>
            <p className="font-work text-lg text-foreground/80 mb-8 leading-relaxed">
              We are a leading Indonesian exporter specializing in premium coconut and palm derivatives. 
              Operating from Malang, East Java, we serve global B2B buyers with commitment to quality, 
              reliability, and professional service. Our extensive network of trusted suppliers and farmers 
              ensures consistent supply of export-grade products.
            </p>
            <Button 
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 font-work font-semibold"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Featured Products
            </h2>
            <p className="font-work text-lg text-muted-foreground">
              Premium quality coconut and palm derivatives for global markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-natural transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-2xl text-primary mb-3">
                    {product.name}
                  </h3>
                  <p className="font-work text-muted-foreground mb-4">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              variant="default"
              className="bg-primary hover:bg-primary/90 font-work font-semibold"
              asChild
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your coconut and palm derivatives requirements. 
            We're here to provide quality products and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="font-work font-semibold text-lg px-8"
              onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
            >
              Contact via WhatsApp
            </Button>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8"
              asChild
            >
              <Link to="/contact">Send Email Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
