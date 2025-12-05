import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Users, Eye, Rocket, Heart, Shield, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const commitments = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
      title: "Strict Quality Control",
      description: "Every product undergoes rigorous inspection to meet international export standards",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Professional Standards",
      description: "Experienced team dedicated to providing excellent service and support",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "On-Time Shipment",
      description: "Reliable logistics and supply chain management for timely delivery",
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Sustainable Sourcing",
      description: "Working with trusted farmers and suppliers who follow sustainable practices",
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
              About PT. Sukses Ekspor Mandiri
            </h1>
            <p className="font-work text-xl text-muted-foreground">
              Your Trusted Partner in Coconut and Palm Derivatives Export
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-4xl text-primary mb-6">
                Who We Are
              </h2>
              <div className="font-work text-lg text-foreground/80 space-y-4 leading-relaxed">
                <p>
                  PT. Sukses Ekspor Mandiri is a professional export company based in Malang, East Java, Indonesia, 
                  specializing in premium coconut and palm derivatives. We serve B2B buyers worldwide including importers, 
                  distributors, and industrial manufacturers who require consistent supply of high-quality raw materials.
                </p>
                <p>
                  Our strategic location in Indonesia—one of the world's largest producers of coconut and palm products—gives 
                  us direct access to the best sources. We work closely with a network of trusted farmers, processors, and 
                  suppliers to ensure that every shipment meets international quality standards.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-playfair font-bold text-4xl text-primary mb-6">
                Our Business Philosophy
              </h2>
              <div className="font-work text-lg text-foreground/80 space-y-4 leading-relaxed">
                <p>
                  We believe that successful business relationships are built on three pillars: <strong>trust</strong>, 
                  <strong> quality</strong>, and <strong>long-term partnership</strong>. Our goal is not just to sell 
                  products, but to become your reliable supplier partner who understands your needs and consistently delivers value.
                </p>
                <p>
                  Every buyer is unique, and we take time to understand your specific requirements—whether it's product 
                  specifications, packaging preferences, or delivery schedules. We're committed to providing transparent 
                  communication and professional service at every step of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-playfair font-bold text-3xl text-primary">
                    Visi Perusahaan
                  </h2>
                </div>
                <p className="font-work text-lg text-foreground/80 leading-relaxed">
                  Menjadi perusahaan perdagangan internasional asal Indonesia yang terpercaya dan berdaya saing global dalam penyediaan coconut and palm derivatives, serta mampu memberikan nilai tambah bagi mitra bisnis di seluruh dunia.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-playfair font-bold text-3xl text-primary">
                    Misi Perusahaan
                  </h2>
                </div>
                <ul className="font-work text-foreground/80 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Membangun hubungan jangka panjang dengan buyer internasional melalui layanan profesional dan kualitas produk yang konsisten.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Memperkuat kerja sama dengan produsen lokal untuk menciptakan rantai pasok yang stabil dan transparan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Menyediakan produk dengan standar mutu internasional dan pengiriman tepat waktu.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Menjadi jembatan antara produsen Indonesia dan pasar global, dengan komitmen menjaga integritas dalam setiap transaksi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Terus memperluas portofolio produk sesuai permintaan pasar global.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company Values */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="font-playfair font-bold text-4xl text-primary mb-4">
                  Nilai Perusahaan
                </h2>
                <p className="font-work text-lg text-muted-foreground">
                  Prinsip yang menjadi fondasi dalam setiap aktivitas bisnis kami
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-accent">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                      Integritas
                    </h3>
                    <p className="font-work text-sm text-muted-foreground leading-relaxed">
                      Menjaga kejujuran dan kejelasan informasi dalam setiap kontak bisnis.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-accent">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                      Kualitas
                    </h3>
                    <p className="font-work text-sm text-muted-foreground leading-relaxed">
                      Mengutamakan kesesuaian spesifikasi, kualitas barang, dan kelancaran pengiriman.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-accent">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                      Komitmen
                    </h3>
                    <p className="font-work text-sm text-muted-foreground leading-relaxed">
                      Menghormati waktu, kesepakatan, dan kebutuhan buyer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card hover:shadow-natural transition-shadow duration-300 border-t-4 border-t-accent">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Handshake className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                      Kemitraan
                    </h3>
                    <p className="font-work text-sm text-muted-foreground leading-relaxed">
                      Membangun hubungan saling mendukung dengan produsen lokal dan mitra global.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Commitments to You
            </h2>
            <p className="font-work text-lg text-muted-foreground">
              What you can expect when partnering with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commitments.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-natural transition-shadow duration-300">
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
            ))}
          </div>
        </div>
      </section>

      {/* Location & Operations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair font-bold text-4xl text-primary mb-6 text-center">
              Location & Operations
            </h2>
            <div className="font-work text-lg text-foreground/80 space-y-4 leading-relaxed text-center">
              <p>
                Our headquarters and operations are based in <strong>Malang, East Java, Indonesia</strong>. 
                This strategic location provides us with excellent access to major coconut and palm oil production 
                regions, as well as efficient logistics connections to international shipping ports.
              </p>
              <p>
                We maintain strong relationships with local suppliers and have established quality control processes 
                at every stage—from sourcing raw materials to final packaging and shipment. Our experienced team 
                ensures smooth operations and reliable service for all our international partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
            Let's Build a Partnership
          </h2>
          <p className="font-work text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're looking for a new supplier or want to diversify your sourcing, 
            we're ready to discuss how we can meet your needs.
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

export default About;
