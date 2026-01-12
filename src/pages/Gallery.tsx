import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import productSemiHusked from "@/assets/product-semi-husked-coconut-3.png";
import productDesiccated from "@/assets/product-desiccated-coconut.jpg";
import productCharcoal from "@/assets/product-charcoal-3.png";
import productCopraPowder from "@/assets/product-copra-powder-2.jpg";
import productCopraPellet from "@/assets/product-copra-pellet.jpg";
import productOil from "@/assets/product-oil.jpg";

const Gallery = () => {
  const { t } = useLanguage();

  const galleryImages = [
    {
      image: productSemiHusked,
      title: t('products.semiHusked'),
      category: t('gallery.category'),
    },
    {
      image: productDesiccated,
      title: t('products.desiccated'),
      category: t('gallery.category'),
    },
    {
      image: productCharcoal,
      title: t('products.charcoal'),
      category: t('gallery.category'),
    },
    {
      image: productCopraPellet,
      title: t('gallery.copraPellet'),
      category: t('gallery.category'),
    },
    {
      image: productCopraPowder,
      title: t('gallery.copraPowder'),
      category: t('gallery.category'),
    },
    {
      image: productOil,
      title: t('gallery.crudeOil'),
      category: t('gallery.category'),
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
                {t('gallery.heroTitle')}
              </h1>
              <p className="font-work text-xl text-muted-foreground">
                {t('gallery.heroSubtitle')}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((item, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 80}>
                <div 
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
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair font-bold text-4xl text-primary mb-6">
                {t('gallery.exportReadyTitle')}
              </h2>
              <p className="font-work text-lg text-foreground/80 mb-8 leading-relaxed">
                {t('gallery.exportReadyP1')}
              </p>
              <p className="font-work text-lg text-foreground/80 leading-relaxed">
                {t('gallery.exportReadyP2')}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-terracotta text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
              {t('gallery.ctaTitle')}
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('gallery.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="font-work font-semibold text-lg px-8"
                onClick={() => window.open('https://wa.me/6285124480871', '_blank')}
              >
                {t('gallery.whatsAppUs')}
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

export default Gallery;
