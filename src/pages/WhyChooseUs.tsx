import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, DollarSign, PackageCheck, ShieldCheck, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Premium Quality Products",
      description: "Every product undergoes strict quality control to ensure it meets international export standards. We work only with reputable suppliers and maintain rigorous inspection processes from sourcing to shipment.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Stable & Reliable Supply",
      description: "Our extensive network of farmers, processors, and suppliers ensures consistent availability year-round. We understand the importance of supply chain reliability for your business operations.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent" />,
      title: "Competitive Pricing",
      description: "Direct relationships with source suppliers and efficient operations allow us to offer competitive prices without compromising quality. We believe in transparent, fair business practices.",
    },
    {
      icon: <PackageCheck className="w-12 h-12 text-accent" />,
      title: "Export Ready Supply Chain",
      description: "Ready to support international buyers with professional handling of documentation, logistics, and technical requirements.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-accent" />,
      title: "Professional Service",
      description: "From initial inquiry to delivery, we provide professional and responsive service. Our experienced team is dedicated to ensuring smooth transactions and building long-term partnerships.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-accent" />,
      title: "Trusted Sourcing Network",
      description: "We maintain strong relationships with trusted farmers and suppliers who follow good agricultural practices. This ensures product quality while supporting sustainable sourcing.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Inquiry & Discussion",
      description: "Share your product requirements, quantities, and specifications with us",
    },
    {
      number: "02",
      title: "Quotation & Samples",
      description: "Receive competitive pricing and product samples for evaluation if needed",
    },
    {
      number: "03",
      title: "Order Confirmation",
      description: "Confirm order details, payment terms, and delivery schedule",
    },
    {
      number: "04",
      title: "Quality Control & Packaging",
      description: "Products are inspected, properly packaged, and prepared for shipment",
    },
    {
      number: "05",
      title: "Shipping & Documentation",
      description: "Arrange logistics and provide all necessary export documentation",
    },
    {
      number: "06",
      title: "After-Sales Support",
      description: "Ongoing support for your satisfaction and future business needs",
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
                Why Choose Us
              </h1>
              <p className="font-work text-xl text-muted-foreground">
                Your trusted partner for quality coconut derivatives
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                <Card className="shadow-card hover:shadow-natural transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">{advantage.icon}</div>
                    <h3 className="font-playfair font-bold text-2xl text-primary mb-3 text-center">
                      {advantage.title}
                    </h3>
                    <p className="font-work text-muted-foreground leading-relaxed text-center">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
                Our Working Process
              </h2>
              <p className="font-work text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent, and professional process from inquiry to delivery
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                <Card className="shadow-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <span className="font-playfair font-bold text-xl text-accent-foreground">
                          {step.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-playfair font-semibold text-xl text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="font-work text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our growing list of satisfied international buyers. Contact us today to discuss 
              your coconut derivatives requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="font-work font-semibold text-lg px-8"
                onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
              >
                Chat on WhatsApp
              </Button>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8"
                asChild
              >
                <Link to="/contact#get-in-touch">Send Inquiry Now</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
