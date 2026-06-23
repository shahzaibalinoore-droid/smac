import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Shield, Cog, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import productPeriscope from "@/assets/product-periscope.jpg";
import productThermalSleeve from "@/assets/product-thermal-sleeve.png";
import product1 from "@/assets/product-1.png";
import productRail1 from "@/assets/product-rail-1.png";
import productComponents from "@/assets/product-components.png";
import productRail2 from "@/assets/product-rail-2.png";
import productRail3 from "@/assets/product-rail-3.png";
import productShowcase from "@/assets/product-showcase-full.png";
import productCradleAssembly from "@/assets/product-cradle-assembly.png";
import periscope1 from "@/assets/Periscope-1.jpg";
import periscope2 from "@/assets/Periscope-2.png";
import periscope3 from "@/assets/Periscope-3.jpg";
import periscope4 from "@/assets/Periscope-4.png";
import smg1 from "@/assets/SMG-1.png";
import smg2 from "@/assets/SMG-2.png";
import smg3 from "@/assets/SMG-3.jpg";
import mg1 from "@/assets/MG-1.jpg";
import mg2 from "@/assets/MG-2.jpg";
import mg3 from "@/assets/MG-3.jpg";
import CounterAnimation from "@/components/CounterAnimation";
import Layout from "@/components/Layout";
import HeroSlideshow from "@/components/HeroSlideshow";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "SMAC Pakistan - Defence & Military Parts Manufacturer | Picatinny Rails, Thermal Sleeves, Tripod Systems",
    description: "SMAC (Sajid Mumtaz & Company) manufactures military-grade picatinny rails, thermal sleeves, tripod systems, cradle assemblies, periscope systems in Rawalpindi Pakistan. Trusted by DGPA & Heavy Industries Taxila.",
    keywords: "SMAC, defence manufacturer Pakistan, picatinny rails, thermal sleeves, tripod systems, cradle assembly, periscope systems, military parts, Rawalpindi, Islamabad, Heavy Industries Taxila, DGPA",
    canonicalPath: "/",
  });
  const features = [
    {
      icon: Shield,
      title: "Defence Solutions",
      description: "Specialized in military-grade components and defence equipment manufacturing",
    },
    {
      icon: Cog,
      title: "Industrial Products",
      description: "Precision machining and manufacturing for heavy industrial applications",
    },
    {
      icon: Users,
      title: "Trusted Partners",
      description: "Serving 10+ clients including DGPA, Heavy Industries Taxila, and major defence organizations",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Decades of experience delivering superior quality and precision",
    },
  ];

  const services = [
    "Precision Manufacturing",
    "Defence Equipment Sourcing",
    "Industrial Component Supply",
    "Custom Machining Solutions",
    "Quality Assurance & Testing",
    "Logistics & Distribution",
  ];

  const [selectedProduct, setSelectedProduct] = useState<{
    src: string;
    title: string;
    subtitle: string;
    gallery?: string[];
  } | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const productItems = [
    {
      src: productPeriscope,
      title: "Periscope M-17",
      subtitle: "Optical defence components",
      gallery: [productPeriscope, productCradleAssembly, periscope1, periscope2, periscope3, periscope4],
    },
    {
      src: productThermalSleeve,
      title: "Spanner#19",
      subtitle: "Spanner#19",
    },
    {
      src: productRail1,
      title: "Commander Seat",
      subtitle: "APC Talha1",
    },
    {
      src: productComponents,
      title: "Picatinny Rail SMG",
      subtitle: "Precision-engineered parts",
      gallery: [smg1, smg2, smg3],
    },
    {
      src: productShowcase,
      title: "Non-critical items Mi-17",
      subtitle: "Helicopter Mi-17",
    },
    {
      src: productRail2,
      title: "Bracket",
      subtitle: "125mm Gun Parts",
    },
    {
      src: productRail3,
      title: "Plunger Asst",
      subtitle: "Tank Engine Part",
    },
    {
      src: product1,
      title: "Tripod MG1A3",
      subtitle: "Mount Tripod For MG",
      gallery: [mg1, mg2, mg3],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
              SMAC
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-green-400 drop-shadow-md">
              Sourcing, Indenting & Manufacturing of Industrial and Defence Products
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md max-w-3xl mx-auto">
              Leading provider of precision defence and industrial solutions with 10+ trusted Organisations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-xl px-8 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-8 py-4 bg-white/10 border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-lg backdrop-blur-sm"
                asChild
              >
              <a href="https://wa.me/923215003408" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-counter-up stats-card p-8 rounded-xl">
                <div className="text-5xl md:text-6xl font-bold mb-3 counter-text">
                  <CounterAnimation end={10} suffix="+" />
                </div>
                <p className="text-foreground font-semibold text-lg">Trusted Organisations</p>
              </div>
              <div className="text-center animate-counter-up stats-card p-8 rounded-xl" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl md:text-6xl font-bold mb-3 counter-text">
                  <CounterAnimation end={7} suffix="+" />
                </div>
                <p className="text-foreground font-semibold text-lg">Years Experience</p>
              </div>
              <div className="text-center animate-counter-up stats-card p-8 rounded-xl" style={{ animationDelay: "0.4s" }}>
                <div className="text-5xl md:text-6xl font-bold mb-3 counter-text">
                  <CounterAnimation end={500} suffix="+" />
                </div>
                <p className="text-foreground font-semibold text-lg">Products Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow-text">
              Why Choose SMAC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Decades of expertise in defence and industrial solutions, trusted by military and industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glow group hover:scale-[1.04] transition-all duration-300 border border-white/10 bg-slate-950/80 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 group-hover:bg-emerald-500/15 transition-colors">
                    <feature.icon className="w-8 h-8 text-emerald-300 group-hover:text-emerald-200" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center mx-auto max-w-4xl">
              <h2 className="text-4xl font-bold mb-6 glow-text">
                Our Product Range
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive selection of defence and industrial products manufactured 
                to the highest standards of quality and precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-center sm:justify-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button 
                  variant="neon" 
                  size="lg"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1lE0lUYGuIaofYx_SRe3PAgMmzhqc7OZF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    View Full Catalog
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productItems.map((product) => (
                <div
                  key={product.title}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_70px_rgba(16,185,129,0.18)]"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(product);
                      setGalleryIndex(0);
                    }}
                    className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-900"
                  >
                    <img
                      src={product.src}
                      alt={product.title}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </button>
                  <div className="mt-4">
                    <p className="text-xl font-semibold text-white">{product.title}</p>
                    <p className="text-sm text-slate-400">{product.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <Dialog open={true} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogContent className="max-w-5xl">
            {selectedProduct.gallery?.length ? (
              <div>
                <DialogTitle className="text-2xl font-semibold text-white mb-4">{selectedProduct.title} Gallery</DialogTitle>
                <DialogDescription className="text-slate-400 mb-6">
                  {selectedProduct.subtitle}
                </DialogDescription>
                <div className="relative w-full overflow-hidden rounded-3xl bg-slate-950 p-4">
                  <img
                    src={selectedProduct.gallery[galleryIndex]}
                    alt={`${selectedProduct.title} ${galleryIndex + 1}`}
                    className="h-[480px] w-full object-contain"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setGalleryIndex((prev) => (prev - 1 + selectedProduct.gallery!.length) % selectedProduct.gallery!.length)}
                    className="rounded-full border border-white/10 bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
                  >
                    Prev
                  </button>
                  <span className="text-sm text-slate-400">
                    {galleryIndex + 1} / {selectedProduct.gallery.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGalleryIndex((prev) => (prev + 1) % selectedProduct.gallery!.length)}
                    className="rounded-full border border-white/10 bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
                  >
                    Next
                  </button>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {selectedProduct.gallery.map((src, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setGalleryIndex(idx)}
                      className={`overflow-hidden rounded-2xl border ${galleryIndex === idx ? "border-emerald-400" : "border-white/10"} bg-slate-900 transition`}
                    >
                      <img src={src} alt={`${selectedProduct.title} thumbnail ${idx + 1}`} className="h-24 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <DialogTitle className="text-2xl font-semibold text-white mb-4">{selectedProduct.title}</DialogTitle>
                <DialogDescription className="text-slate-400 mb-6">
                  {selectedProduct.subtitle}
                </DialogDescription>
                <div className="relative w-full overflow-hidden rounded-3xl bg-slate-950 p-4">
                  <img
                    src={selectedProduct.src}
                    alt={selectedProduct.title}
                    className="h-[480px] w-full object-contain"
                  />
                </div>
              </div>
            )}
            <DialogClose className="mt-6 px-5 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-400 transition">
              Close
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">
            Ready to Partner with Industry Leaders?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join 10+ satisfied clients who trust SMAC for their defence and industrial needs. 
            Get a custom quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-8 py-4"
              asChild
            >
              <a href="https://wa.me/923215003408" target="_blank" rel="noopener noreferrer">
                Request Quote
              </a>
            </Button>
            <Button 
              variant="outline_neon" 
              size="lg" 
              className="text-xl px-8 py-4"
              asChild
            >
              <a href="https://drive.google.com/file/d/1lE0lUYGuIaofYx_SRe3PAgMmzhqc7OZF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Catalog
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
