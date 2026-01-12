import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import productSemiHusked from "@/assets/product-semi-husked-coconut-3.png";
import productDesiccated from "@/assets/product-desiccated-coconut.jpg";
import productCharcoal from "@/assets/product-charcoal-3.png";
import productCopraPowder from "@/assets/product-copra-powder.jpg";
import productCopraPellet from "@/assets/product-copra-pellet.jpg";
import productOil from "@/assets/product-oil.jpg";

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      name: t('products.semiHusked'),
      image: productSemiHusked,
      description: t('products.semiHuskedFullDesc'),
      applications: t('products.semiHuskedApps'),
      features: t('products.semiHuskedFeatures'),
    },
    {
      name: t('products.desiccated'),
      image: productDesiccated,
      description: t('products.desiccatedFullDesc'),
      applications: t('products.desiccatedApps'),
      features: t('products.desiccatedFeatures'),
    },
    {
      name: t('products.charcoal'),
      image: productCharcoal,
      description: t('products.charcoalFullDesc'),
      applications: t('products.charcoalApps'),
      features: t('products.charcoalFeatures'),
    },
    {
      name: t('products.copraMeal'),
      images: [productCopraPowder, productCopraPellet],
      description: t('products.copraMealDesc'),
      applications: t('products.copraMealApps'),
      features: t('products.copraMealFeatures'),
    },
    {
      name: t('products.crudeOil'),
      image: productOil,
      description: t('products.crudeOilDesc'),
      applications: t('products.crudeOilApps'),
      features: t('products.crudeOilFeatures'),
    },
  ];

  const getFeatures = (features: string | string[]): string[] => {
    if (Array.isArray(features)) return features;
    return [];
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
                {t('products.heroTitle')}
              </h1>
              <p className="font-work text-xl text-muted-foreground">
                {t('products.heroSubtitle')}
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
                      {'images' in product && product.images ? (
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
                          {t('products.applications')}
                        </h3>
                        <p className="font-work text-muted-foreground">
                          {product.applications}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-work font-semibold text-lg text-primary mb-2">
                          {t('products.keyFeatures')}
                        </h3>
                        <ul className="font-work text-muted-foreground space-y-1">
                          {getFeatures(product.features).map((feature, idx) => (
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
                <strong>Note:</strong> {t('products.inquiryNote')}
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold"
                asChild
              >
                <Link to="/contact#get-in-touch">{t('products.requestInfo')}</Link>
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
              {t('products.ctaTitle')}
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('products.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="font-work font-semibold text-lg px-8"
                onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
              >
                {t('products.whatsAppNow')}
              </Button>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8"
                asChild
              >
                <Link to="/contact#get-in-touch">{t('home.sendInquiry')}</Link>
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
