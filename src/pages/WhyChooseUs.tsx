import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, DollarSign, PackageCheck, ShieldCheck, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: t('whyChooseUs.premiumProducts'),
      description: t('whyChooseUs.premiumProductsDesc'),
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: t('whyChooseUs.stableSupply'),
      description: t('whyChooseUs.stableSupplyDesc'),
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent" />,
      title: t('whyChooseUs.competitivePricing'),
      description: t('whyChooseUs.competitivePricingDesc'),
    },
    {
      icon: <PackageCheck className="w-12 h-12 text-accent" />,
      title: t('whyChooseUs.exportReady'),
      description: t('whyChooseUs.exportReadyDesc'),
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-accent" />,
      title: t('whyChooseUs.professionalService'),
      description: t('whyChooseUs.professionalServiceDesc'),
    },
    {
      icon: <Leaf className="w-12 h-12 text-accent" />,
      title: t('whyChooseUs.trustedSourcing'),
      description: t('whyChooseUs.trustedSourcingDesc'),
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: t('whyChooseUs.step1'),
      description: t('whyChooseUs.step1Desc'),
    },
    {
      number: "02",
      title: t('whyChooseUs.step2'),
      description: t('whyChooseUs.step2Desc'),
    },
    {
      number: "03",
      title: t('whyChooseUs.step3'),
      description: t('whyChooseUs.step3Desc'),
    },
    {
      number: "04",
      title: t('whyChooseUs.step4'),
      description: t('whyChooseUs.step4Desc'),
    },
    {
      number: "05",
      title: t('whyChooseUs.step5'),
      description: t('whyChooseUs.step5Desc'),
    },
    {
      number: "06",
      title: t('whyChooseUs.step6'),
      description: t('whyChooseUs.step6Desc'),
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
                {t('whyChooseUs.heroTitle')}
              </h1>
              <p className="font-work text-xl text-muted-foreground">
                {t('whyChooseUs.heroSubtitle')}
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
                {t('whyChooseUs.processTitle')}
              </h2>
              <p className="font-work text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('whyChooseUs.processSubtitle')}
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
      <section className="py-20 bg-gradient-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
              {t('whyChooseUs.ctaTitle')}
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('whyChooseUs.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="font-work font-semibold text-lg px-8"
                onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
              >
                {t('whyChooseUs.chatWhatsApp')}
              </Button>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8"
                asChild
              >
                <Link to="/contact#get-in-touch">{t('whyChooseUs.sendInquiryNow')}</Link>
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
