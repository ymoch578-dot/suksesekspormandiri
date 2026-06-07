import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import productSemiHusked from "@/assets/product-semi-husked-coconut-3.png";
import productDesiccated from "@/assets/product-desiccated-coconut-new.png";
import productEdibleCopra from "@/assets/product-copra.jpg";
import productBriquette from "@/assets/product-briquette.jpg";
import productCharcoal from "@/assets/product-charcoal-3.png";
import heroCover from "@/assets/hero-cover-website-2.jpg";

const Index = () => {
  const { t } = useLanguage();

  const highlights = [{
    icon: <Award className="w-10 h-10 text-forest-green" />,
    title: t('home.highlights.premiumQuality'),
    description: t('home.highlights.premiumQualityDesc')
  }, {
    icon: <Clock className="w-10 h-10 text-forest-green" />,
    title: t('home.highlights.stableSupply'),
    description: t('home.highlights.stableSupplyDesc')
  }, {
    icon: <DollarSign className="w-10 h-10 text-forest-green" />,
    title: t('home.highlights.competitivePricing'),
    description: t('home.highlights.competitivePricingDesc')
  }, {
    icon: <PackageCheck className="w-10 h-10 text-forest-green" />,
    title: t('home.highlights.exportReady'),
    description: t('home.highlights.exportReadyDesc')
  }];

  const featuredProducts = [{
    name: t('products.semiHusked'),
    image: productSemiHusked,
    description: t('products.semiHuskedDesc')
  }, {
    name: t('products.desiccated'),
    image: productDesiccated,
    description: t('products.desiccatedDesc')
  }, {
    name: t('products.edibleCopra'),
    image: productEdibleCopra,
    description: t('products.edibleCopraDesc')
  }, {
    name: t('products.briquette'),
    image: productBriquette,
    description: t('products.briquetteDesc')
  }, {
    name: t('products.charcoal'),
    image: productCharcoal,
    description: t('products.charcoalDesc')
  }];

  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section — Editorial Heritage */}
      <section className="w-full flex items-center justify-center bg-stone-100 p-4 lg:p-12">
        <div className="relative w-full max-w-7xl h-[85vh] min-h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl flex items-center">
          {/* Background image + gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img src={heroCover} alt="Indonesian coconut plantation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(120,60%,15%)]/90 via-[hsl(120,60%,20%)]/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <ScrollAnimationWrapper animation="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-12 bg-lime-accent" />
                  <span className="text-lime-accent font-work font-bold tracking-widest uppercase text-xs">
                    {t('home.highlights.premiumQuality')}
                  </span>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-up" delay={100}>
                <h1 className="font-playfair text-primary-foreground text-5xl md:text-7xl leading-[1.1] mb-8">
                  {t('home.heroTitle')}{' '}
                  <span className="italic text-lime-accent">{t('home.heroTitleHighlight')}</span>
                </h1>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-up" delay={200}>
                <p className="font-work text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                  {t('home.heroSubtitle')}
                </p>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-up" delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-warm hover:bg-warm/90 text-warm-foreground font-work font-semibold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-transform hover:scale-105">
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t('home.sendInquiry')}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground font-work font-semibold px-8 py-6 backdrop-blur-sm">
                    <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t('home.viewProducts')}</Link>
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            </div>

            {/* Product collage — all 5 products, deterministic layout */}
            <div className="hidden lg:block relative w-full h-[560px]">
              {/* Lime dot pattern decor */}
              <div className="absolute -top-2 right-0 grid grid-cols-4 gap-2 opacity-40 z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-lime-accent" />
                ))}
              </div>

              <ScrollAnimationWrapper animation="fade-up" delay={200}>
                <div className="absolute top-2 left-0 w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/15 -rotate-6 shadow-2xl z-20">
                  <img src={productSemiHusked} alt="Semi husked coconut" className="w-full h-full object-cover" />
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-left" delay={300}>
                <div className="absolute top-8 right-4 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white/15 rotate-3 shadow-2xl z-10">
                  <img src={productEdibleCopra} alt="Edible copra" className="w-full h-full object-cover" />
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-up" delay={400}>
                <div className="absolute top-[200px] left-16 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white/15 rotate-2 shadow-2xl z-30">
                  <img src={productDesiccated} alt="Desiccated coconut" className="w-full h-full object-cover" />
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-up" delay={500}>
                <div className="absolute bottom-2 left-0 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white/15 -rotate-3 shadow-2xl z-20">
                  <img src={productBriquette} alt="Coconut charcoal briquette" className="w-full h-full object-cover" />
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-right" delay={600}>
                <div className="absolute bottom-8 right-2 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white/15 rotate-6 shadow-2xl z-10">
                  <img src={productCharcoal} alt="Coconut shell charcoal" className="w-full h-full object-cover" />
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-forest-green via-lime-accent to-terracotta" />
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
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest-green mb-6">
                {t('home.aboutTitle')}
              </h2>
              <p className="font-work text-lg text-foreground/80 mb-8 leading-relaxed">
                {t('home.aboutDesc')}
              </p>
              <Button variant="default" size="lg" className="font-work font-semibold" asChild>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t('home.learnMore')}</Link>
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
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-forest-green mb-4">
                {t('home.featuredTitle')}
              </h2>
              <p className="font-work text-lg text-muted-foreground">
                {t('home.featuredSubtitle')}
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
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
              <Button size="lg" variant="default" className="font-work font-semibold" asChild>
                <Link to="/products">{t('home.viewAllProducts')}</Link>
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
              {t('home.ctaTitle')}
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('home.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-work font-semibold text-lg px-8" onClick={() => window.open('https://wa.me/6285124480871', '_blank')}>
                {t('home.contactWhatsApp')}
              </Button>
              <Button size="lg" className="bg-warm hover:bg-warm/90 text-warm-foreground font-work font-semibold text-lg px-8" asChild>
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t('home.sendInquiry')}</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
