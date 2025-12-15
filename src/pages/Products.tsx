import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";
import productSemiHusked from "@/assets/product-semi-husked-coconut-3.png";
import productDesiccated from "@/assets/product-desiccated-coconut.jpg";
import productCharcoal from "@/assets/product-charcoal-3.png";
import productCopraPowder from "@/assets/product-copra-powder.jpg";
import productCopraPellet from "@/assets/product-copra-pellet.jpg";
import productOil from "@/assets/product-oil.jpg";
import productGlycerine from "@/assets/product-crude-glycerine-new.png";
import productPfad from "@/assets/product-pfad-new.png";
import productPalmKernelShell from "@/assets/product-palm-kernel-shell.jpg";
import productPalmKernelShellCharcoal from "@/assets/product-palm-kernel-shell-charcoal.jpg";

const Products = () => {
  const products = [
    {
      name: "Semi Husked Coconut",
      image: productSemiHusked,
      description: "Premium quality semi husked coconuts sourced from trusted farms across Indonesia. Ideal for coconut water, copra production, and various industrial applications.",
      applications: "Food processing, beverage industry, copra production, coconut oil manufacturing",
      features: ["Export-grade quality", "Properly selected and inspected", "Consistent size and weight", "Available year-round"],
    },
    {
      name: "Desiccated Coconut (High Fat)",
      image: productDesiccated,
      description: "Fresh coconut meat finely processed under strict hygiene standards. Perfect for food manufacturing and bakery industries.",
      applications: "Bakery products, confectionery, food manufacturing, dessert ingredients",
      features: ["Food-grade quality", "Proper moisture content", "Natural white color", "Customizable particle size"],
    },
    {
      name: "Coconut Shell Charcoal",
      image: productCharcoal,
      description: "High-quality coconut shell charcoal produced from selected coconut shells. Excellent burning properties and consistent quality for industrial and commercial use.",
      applications: "BBQ charcoal, activated carbon production, industrial fuel, shisha charcoal",
      features: ["High carbon content", "Low ash percentage", "Long burning time", "Consistent quality"],
    },
    {
      name: "Copra Meal (Pellet and Powder)",
      images: [productCopraPowder, productCopraPellet],
      description: "Nutritious copra meal produced as a by-product of coconut oil extraction. Rich in protein and fiber, ideal for animal feed industries. Available in powder and pellet form.",
      applications: "Livestock feed, poultry feed, aquaculture, animal nutrition",
      features: ["High protein content", "Natural and chemical-free", "Consistent quality", "Properly dried and processed"],
    },
    {
      name: "Crude Coconut Oil",
      image: productOil,
      description: "Crude coconut oil is unrefined coconut oil extracted from dried mature coconut meat (copra). It maintains its natural properties and is widely used for industrial applications.",
      applications: "Soap manufacturing, cosmetics industry, biodiesel production, industrial lubricants",
      features: ["Natural extraction process", "Consistent quality", "Proper storage and packaging", "Traceable sourcing"],
    },
    {
      name: "Crude Glycerine",
      image: productGlycerine,
      description: "Industrial-grade crude glycerine derived from biodiesel production. Suitable for various industrial applications requiring glycerol content.",
      applications: "Chemical manufacturing, antifreeze production, industrial processes, further refining",
      features: ["Industrial grade", "Consistent glycerol content", "Proper handling and storage", "Available in bulk quantities"],
    },
    {
      name: "Palm Fatty Acid Distillate (PFAD)",
      image: productPfad,
      description: "By-product of palm oil refining process. Used in various industrial applications including soap, animal feed, and biodiesel production.",
      applications: "Soap manufacturing, animal feed, oleochemicals, biodiesel production",
      features: ["Industrial specification", "Consistent fatty acid composition", "Proper storage conditions", "Bulk supply available"],
    },
    {
      name: "Palm Kernel Shell",
      image: productPalmKernelShell,
      description: "Biomass fuel derived from palm oil production. Excellent renewable energy source with high calorific value for power generation and industrial heating.",
      applications: "Biomass power plants, industrial boilers, cement kilns, renewable energy production",
      features: ["High calorific value", "Low moisture content", "Sustainable biomass", "Bulk supply available"],
    },
    {
      name: "Palm Kernel Shell Charcoal",
      image: productPalmKernelShellCharcoal,
      description: "High-quality charcoal produced from palm kernel shells. Excellent burning properties with high carbon content for industrial and commercial applications.",
      applications: "Activated carbon production, industrial fuel, metallurgical applications, BBQ charcoal",
      features: ["High carbon content", "Consistent quality", "Low ash content", "Bulk supply available"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
                Our Products
              </h1>
              <p className="font-work text-xl text-muted-foreground">
                Premium coconut and palm derivatives for global B2B markets
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 50}>
                <Card className="overflow-hidden shadow-card hover:shadow-natural transition-shadow duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="aspect-square md:aspect-auto overflow-hidden">
                      {'images' in product ? (
                        <div className="grid grid-cols-2 h-full">
                          {product.images.map((img, idx) => (
                            <img 
                              key={idx}
                              src={img} 
                              alt={`${product.name} ${idx + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          ))}
                        </div>
                      ) : (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h2 className="font-playfair font-bold text-3xl text-primary mb-4">
                        {product.name}
                      </h2>
                      <p className="font-work text-foreground/80 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="mb-4">
                        <h3 className="font-work font-semibold text-lg text-primary mb-2">
                          Applications:
                        </h3>
                        <p className="font-work text-muted-foreground">
                          {product.applications}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-work font-semibold text-lg text-primary mb-2">
                          Key Features:
                        </h3>
                        <ul className="font-work text-muted-foreground space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Note */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-work text-lg text-foreground/80 mb-6">
                <strong>Note:</strong> All products are available for export in bulk quantities. 
                Pricing and detailed specifications are provided upon inquiry. 
                We can accommodate custom packaging and specific requirements based on your needs.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold"
                asChild
              >
                <Link to="/contact">Request Product Information</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
              Need a Custom Product Specification?
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We can accommodate specific requirements for volume, packaging, and quality specifications. Contact our team to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="font-work font-semibold text-lg px-8"
                onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
              >
                WhatsApp Now
              </Button>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8"
                asChild
              >
                <Link to="/contact">Send Inquiry</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
