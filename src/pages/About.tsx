import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Users, Eye, Rocket, Heart, Shield, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const commitments = [{
    icon: <CheckCircle2 className="w-8 h-8 text-warm" />,
    title: t('about.strictQC'),
    description: t('about.strictQCDesc')
  }, {
    icon: <Users className="w-8 h-8 text-warm" />,
    title: t('about.professional'),
    description: t('about.professionalDesc')
  }, {
    icon: <TrendingUp className="w-8 h-8 text-warm" />,
    title: t('about.onTime'),
    description: t('about.onTimeDesc')
  }, {
    icon: <Target className="w-8 h-8 text-warm" />,
    title: t('about.sustainable'),
    description: t('about.sustainableDesc')
  }];

  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
                {t('about.heroTitle')}
              </h1>
              <p className="font-work text-xl text-muted-foreground">
                {t('about.heroSubtitle')}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-12">
                <h2 className="font-playfair font-bold text-4xl text-primary mb-6">
                  {t('about.whoWeAre')}
                </h2>
                <div className="font-work text-lg text-foreground/80 space-y-4 leading-relaxed">
                  <p>{t('about.whoWeAreP1')}</p>
                  <p>{t('about.whoWeAreP2')}</p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={100}>
              <div className="mb-12">
                <h2 className="font-playfair font-bold text-4xl text-primary mb-6">
                  {t('about.philosophy')}
                </h2>
                <div className="font-work text-lg text-foreground/80 space-y-4 leading-relaxed">
                  <p>{t('about.philosophyP1')}</p>
                  <p>{t('about.philosophyP2')}</p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vision */}
              <ScrollAnimationWrapper animation="fade-up">
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-warm/10 flex items-center justify-center mb-4">
                      <Eye className="w-7 h-7 text-warm" />
                    </div>
                    <h2 className="font-playfair font-bold text-3xl text-primary">
                      {t('about.vision')}
                    </h2>
                  </div>
                  <p className="font-work text-lg text-foreground/80 leading-relaxed text-center">
                    {t('about.visionText')}
                  </p>
                </div>
              </ScrollAnimationWrapper>

              {/* Mission */}
              <ScrollAnimationWrapper animation="fade-up" delay={100}>
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-warm/10 flex items-center justify-center">
                      <Rocket className="w-7 h-7 text-warm" />
                    </div>
                    <h2 className="font-playfair font-bold text-3xl text-primary">
                      {t('about.mission')}
                    </h2>
                  </div>
                  <ul className="font-work text-foreground/80 space-y-4">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-warm mt-1 flex-shrink-0" />
                        <span>{t(`about.missionItems.${index}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            </div>

            {/* Company Values */}
            <div className="mt-16">
              <ScrollAnimationWrapper animation="fade-up">
                <div className="text-center mb-12">
                  <h2 className="font-playfair font-bold text-4xl text-primary mb-4">
                    {t('about.coreValues')}
                  </h2>
                  <p className="font-work text-lg text-muted-foreground">
                    {t('about.coreValuesSubtitle')}
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ScrollAnimationWrapper animation="fade-up" delay={0}>
                  <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-warm h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-warm/10 flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-warm" />
                      </div>
                      <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                        {t('about.integrity')}
                      </h3>
                      <p className="font-work text-sm text-muted-foreground leading-relaxed">
                        {t('about.integrityDesc')}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fade-up" delay={100}>
                  <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-warm h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-warm/10 flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-warm" />
                      </div>
                      <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                        {t('about.quality')}
                      </h3>
                      <p className="font-work text-sm text-muted-foreground leading-relaxed">
                        {t('about.qualityDesc')}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fade-up" delay={200}>
                  <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-warm h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-warm/10 flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-warm" />
                      </div>
                      <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                        {t('about.commitment')}
                      </h3>
                      <p className="font-work text-sm text-muted-foreground leading-relaxed">
                        {t('about.commitmentDesc')}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fade-up" delay={300}>
                  <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-warm h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-warm/10 flex items-center justify-center mx-auto mb-4">
                        <Handshake className="w-8 h-8 text-warm" />
                      </div>
                      <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                        {t('about.partnership')}
                      </h3>
                      <p className="font-work text-sm text-muted-foreground leading-relaxed">
                        {t('about.partnershipDesc')}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
                {t('about.commitmentsTitle')}
              </h2>
              <p className="font-work text-lg text-muted-foreground">
                {t('about.commitmentsSubtitle')}
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commitments.map((item, index) => <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                <Card className="shadow-card hover:shadow-natural transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-playfair font-semibold text-2xl text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="font-work text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>)}
          </div>
        </div>
      </section>

      {/* Location & Operations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair font-bold text-4xl text-primary mb-6 text-center">
                {t('about.locationTitle')}
              </h2>
              <div className="font-work text-lg text-foreground/80 space-y-4 leading-relaxed text-center">
                <p>{t('about.locationP1')}</p>
                <p>{t('about.locationP2')}</p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
              {t('about.ctaTitle')}
            </h2>
            <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('about.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-work font-semibold text-lg px-8" onClick={() => window.open('https://wa.me/6285124480871', '_blank')}>
                {t('about.whatsAppUs')}
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-work font-semibold text-lg px-8" asChild>
                <Link to="/contact#get-in-touch">{t('home.sendInquiry')}</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
