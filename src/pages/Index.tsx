import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";
import productSemiHusked from "@/assets/product-semi-husked-coconut-3.png";
import productDesiccated from "@/assets/product-desiccated-coconut.jpg";
import productCharcoal from "@/assets/product-charcoal-3.png";
import heroCover from "@/assets/hero-cover-website.png";

const Index = () => {
  const highlights = [{
    icon: <Award className="w-10 h-10 text-accent" />,
    title: "Premium Quality",
    description: "Stringent quality control for export-grade products"
  }, {
    icon: <Clock className="w-10 h-10 text-accent" />,
    title: "Stable Supply",
    description: "Reliable sourcing network ensuring consistent delivery"
  }, {
    icon: <DollarSign className="w-10 h-10 text-accent" />,
    title: "Competitive Pricing",
    description: "Fair pricing with transparent business practices"
  }, {
    icon: <PackageCheck className="w-10 h-10 text-accent" />,
    title: "Export-Ready Supply Chain",
    description: "Premium product quality with export-ready compliance"
  }];

  const featuredProducts = [{
    name: "Semi Husked Coconut",
    image: productSemiHusked,
    description: "Premium quality semi husked coconuts for various industrial applications"
  }, {
    name: "Desiccated Coconut",
    image: productDesiccated,
    description: "Fresh coconut meat, finely processed for food industry"
  }, {
    name: "Coconut Shell Charcoal",
    image: productCharcoal,
    description: "High-quality charcoal for industrial and commercial use"
  }];

  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(26, 51, 15, 0.75), rgba(26, 51, 15, 0.65)), url(${heroCover})`
    }}>
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h1 className="font-playfair font-bold text-5xl md:text-7xl text-primary-foreground mb-6">
              Trusted Global Supplier of<br />
              Coconut Derivatives
            </h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fade-up" delay={200}>
            <p className="font-work text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              PT. Sukses Ekspor Mandiri - Your reliable partner for premium quality coconut products from Indonesia
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-work font-semibold text-lg px-8 py-6" asChild>
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 h-full">
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
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
                About PT. Sukses Ekspor Mandiri
              </h2>
              <p className="font-work text-lg text-foreground/80 mb-8 leading-relaxed">
                We are a leading Indonesian exporter specializing in premium coconut derivatives. 
                Operating from Malang, East Java, we serve global B2B buyers with commitment to quality, 
                reliability, and professional service. Our extensive network of trusted suppliers and farmers 
                ensures consistent supply of export-grade products.
              </p>
              <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 font-work font-semibold" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
                Our Featured Products
              </h2>
              <p className="font-work text-lg text-muted-foreground">
                Premium quality coconut derivatives for global markets
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 150}>
                <Card className="overflow-hidden shadow-card hover:shadow-natural transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
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
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 font-work font-semibold" asChild>
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss your coconut derivatives requirements. 
              We're here to provide quality products and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-work font-semibold text-lg px-8" onClick={() => window.open('https://wa.me/6285124480871', '_blank')}>
                Contact via WhatsApp
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8" asChild>
                <Link to="/contact#get-in-touch">Send Inquiry</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
