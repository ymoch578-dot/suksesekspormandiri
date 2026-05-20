import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  image?: string;
}

/**
 * Editorial Heritage hero for inner pages.
 * Stone-toned outer band, large rounded forest-green container,
 * lime-accent eyebrow + italic highlight, bottom gradient accent bar.
 */
const PageHero = ({ eyebrow, title, highlight, subtitle, image }: PageHeroProps) => {
  return (
    <section className="w-full flex items-center justify-center bg-stone-100 p-4 lg:p-12">
      <div className="relative w-full max-w-7xl min-h-[360px] md:min-h-[440px] overflow-hidden rounded-[2.5rem] shadow-2xl flex items-center bg-forest-green">
        {image && (
          <div className="absolute inset-0 z-0">
            <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(120,60%,15%)]/95 via-[hsl(120,60%,18%)]/80 to-[hsl(120,60%,20%)]/50" />
          </div>
        )}

        {/* Lime dot pattern decor */}
        <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-40 z-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
          ))}
        </div>

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="max-w-3xl">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-lime-accent" />
                <span className="text-lime-accent font-work font-bold tracking-widest uppercase text-xs">
                  {eyebrow}
                </span>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={100}>
              <h1 className="font-playfair font-bold text-primary-foreground text-4xl md:text-6xl leading-[1.1] mb-6">
                {title}
                {highlight && (
                  <>
                    {' '}
                    <span className="italic text-lime-accent">{highlight}</span>
                  </>
                )}
              </h1>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <p className="font-work text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-forest-green via-lime-accent to-terracotta" />
      </div>
    </section>
  );
};

export default PageHero;