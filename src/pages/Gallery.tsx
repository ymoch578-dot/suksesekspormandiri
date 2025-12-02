import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coconut.jpg";
import productCoconut from "@/assets/product-coconut.jpg";
import productShredded from "@/assets/product-shredded.jpg";
import productCharcoal from "@/assets/product-charcoal.jpg";
import productCopra from "@/assets/product-copra.jpg";
import productOil from "@/assets/product-oil.jpg";
import productGlycerine from "@/assets/product-glycerine.jpg";
import productPfad from "@/assets/product-pfad.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      image: heroImage,
      title: "Fresh Coconut Harvest",
      category: "Production",
    },
    {
      image: productCoconut,
      title: "Premium Mature Coconuts",
      category: "Products",
    },
    {
      image: productShredded,
      title: "Shredded Coconut Processing",
      category: "Products",
    },
    {
      image: productCharcoal,
      title: "Coconut Shell Charcoal",
      category: "Products",
    },
    {
      image: productCopra,
      title: "Copra Meal Production",
      category: "Products",
    },
    {
      image: productOil,
      title: "Crude Coconut Oil",
      category: "Products",
    },
    {
      image: productGlycerine,
      title: "Crude Glycerine Storage",
      category: "Products",
    },
    {
      image: productPfad,
      title: "Palm Fatty Acid Distillate",
      category: "Products",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
              Gallery
            </h1>
            <p className="font-work text-xl text-muted-foreground">
              See our products, production processes, and quality standards
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((item, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-card hover:shadow-natural transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="font-work text-sm font-semibold text-accent mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-playfair font-bold text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair font-bold text-4xl text-primary mb-6">
              Quality You Can See
            </h2>
            <p className="font-work text-lg text-foreground/80 mb-8 leading-relaxed">
              Our gallery showcases the quality of our products and the care we take in every step of 
              the process—from sourcing raw materials to final packaging. We believe in transparency 
              and invite you to see the standards we maintain for all our export products.
            </p>
            <p className="font-work text-lg text-foreground/80 leading-relaxed">
              Whether it's coconut products or palm derivatives, every item undergoes strict quality 
              control to ensure it meets your specifications and international standards. These images 
              represent our commitment to excellence and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
            Want to Learn More About Our Products?
          </h2>
          <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us for detailed product information, specifications, or to request samples. 
            We're here to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="font-work font-semibold text-lg px-8"
              onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
            >
              WhatsApp Us
            </Button>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8"
              asChild
            >
              <Link to="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
