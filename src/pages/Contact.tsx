import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nCountry: ${formData.country}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:suksesekspormandiri@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the inquiry form filled in.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
                Contact Us
              </h1>
              <p className="font-work text-xl text-muted-foreground">
                Let's discuss how we can serve your coconut derivatives needs
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <ScrollAnimationWrapper animation="fade-up">
              <div>
                <h2 id="get-in-touch" className="font-playfair font-bold text-4xl text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="font-work text-lg text-foreground/80 mb-8 leading-relaxed">
                  We welcome inquiries from importers, distributors, and industrial buyers worldwide. 
                  Whether you have questions about our products, need a quotation, or want to discuss 
                  your specific requirements, our team is ready to assist you.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-work font-semibold text-lg text-primary mb-1">Address</h3>
                      <p className="font-work text-foreground/80">
                        Malang, Jawa Timur<br />Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-sky-cyan flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-work font-semibold text-lg text-primary mb-1">Email</h3>
                      <div className="flex flex-col gap-1">
                        <a 
                          href="mailto:suksesekspormandiri@gmail.com"
                          className="font-work text-foreground/80 hover:text-primary transition-colors"
                        >
                          suksesekspormandiri@gmail.com
                        </a>
                        <a 
                          href="mailto:sales@suksesekspormandiri.com"
                          className="font-work text-foreground/80 hover:text-primary transition-colors"
                        >
                          sales@suksesekspormandiri.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-work font-semibold text-lg text-primary mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/6285124480871"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-work text-foreground/80 hover:text-primary transition-colors"
                      >
                        +62 851-2448-0871
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-work font-semibold text-lg text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/company/pt-sukses-ekspor-mandiri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-work">LinkedIn</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/share/17onWDUhM4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="font-work">Facebook</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/suksesekspormandiri?igsh=MWV5Zjl1eDY2MmRjcQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="font-work">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Form */}
            <ScrollAnimationWrapper animation="fade-up" delay={150}>
              <Card className="shadow-natural">
                <CardContent className="p-8">
                  <h3 className="font-playfair font-bold text-3xl text-primary mb-6">
                    Send an Inquiry
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="font-work font-semibold">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 font-work"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-work font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 font-work"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="font-work font-semibold">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 font-work"
                        placeholder="Your Company Ltd."
                      />
                    </div>

                    <div>
                      <Label htmlFor="country" className="font-work font-semibold">
                        Country *
                      </Label>
                      <Input
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-2 font-work"
                        placeholder="United States"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-work font-semibold">
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 font-work min-h-[150px]"
                        placeholder="Please provide details about your inquiry, including product of interest, quantities, and any specific requirements..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold"
                    >
                      Send Inquiry Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-royal-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
              Prefer to Chat Directly?
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              For faster response, feel free to contact us directly via WhatsApp. 
              Our team is ready to answer your questions.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="font-work font-semibold text-lg px-8"
              onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
            >
              Chat on WhatsApp
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
