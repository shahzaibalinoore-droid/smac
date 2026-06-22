import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Building, Cog, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import CounterAnimation from "@/components/CounterAnimation";
import useSEO from "@/hooks/useSEO";

const Clients = () => {
  useSEO({
    title: "SMAC Clients - DGPA, Heavy Industries Taxila & Defence Organizations | Pakistan",
    description: "SMAC serves 10+ trusted clients including DGPA, Heavy Industries Taxila, Pakistan Ordnance Factories & major defence organizations. Proven track record in military parts manufacturing.",
    keywords: "SMAC clients, DGPA supplier, Heavy Industries Taxila, Pakistan Ordnance Factories, defence clients Pakistan, military manufacturer clients",
    canonicalPath: "/clients",
  });
  const clientCategories = [
    {
      icon: Shield,
      title: "Defence & Military",
      count: 5,
      description: "Army, Navy, Air Force, and defence contractors",
      clients: [
        "Director General Procurement Army (DGPA)",
        "Pakistan Air Force (PAF)",
        "DP Navy",
        "DP Air",
        "DGRDE",
      ],
    },
    {
      icon: Building,
      title: "Heavy Industries",
      count: 3,
      description: "Manufacturing and industrial corporations",
      clients: [
        "Heavy Industries Taxila",
        "Pakistan Ordnance Factories (POF)",
        "Steel Mills",
        "Automotive Manufacturers",
        "Heavy Machinery Companies",
      ],
    },
    {
      icon: Cog,
      title: "Manufacturing",
      count: 2,
      description: "Precision manufacturing and engineering companies",
      clients: [
        "Precision Engineering Firms",
        "Tool & Die Manufacturers",
        "Machining Companies",
      ],
    },
  ];

  const testimonials = [
    {
      company: "Defence Equipment Manufacturer",
      industry: "Defence",
      testimonial: "SMAC has been our trusted partner for over 15 years. Their precision manufacturing and quality standards are unmatched in the industry.",
      rating: 5,
    },
    {
      company: "Heavy Industries Corporation",
      industry: "Industrial",
      testimonial: "Excellent service and product quality. SMAC consistently delivers on time and meets our exact specifications for complex industrial components.",
      rating: 5,
    },
    {
      company: "Military Equipment Supplier",
      industry: "Defence",
      testimonial: "Professional service, competitive pricing, and superior quality. SMAC understands the critical nature of defence applications.",
      rating: 5,
    },
  ];

 const stats = [
    //{ label: "Total Clients", value: 10, suffix: "+" },
    //{ label: "Countries Served", value: 25, suffix: "+" },
    //{ label: "Projects Completed", value: 5000, suffix: "+" },
    //{ label: "Client Retention Rate", value: 95, suffix: "%" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 glow-text">
              Our Trusted Clients
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proud to serve 10+ clients across defence, industrial, and manufacturing sectors
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center stats-card p-8 rounded-xl">
                <div className="text-5xl md:text-6xl font-bold mb-3 counter-text">
                  <CounterAnimation 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                <p className="text-foreground font-semibold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow-text">
              Our Client Portfolio
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving diverse industries with specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => (
              <Card
                key={index}
                className="card-glow group hover:scale-[1.04] transition-all duration-300 border border-white/10 bg-slate-950/80 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-300">
                    {category.title}
                  </h3>
                  
                  <div className="text-3xl font-bold mb-3 counter-text">
                    <CounterAnimation end={category.count} suffix="+" />
                  </div>
                  
                  <p className="text-slate-400 mb-4 text-sm">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.clients.map((client, clientIndex) => (
                      <div key={clientIndex} className="text-sm text-slate-400">
                        • {client}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow-text">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by industry leaders for quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glow group hover:scale-[1.04] transition-all duration-300 border border-white/10 bg-slate-950/80 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 text-primary">★</div>
                      ))}
                    </div>
                    <Badge variant="secondary">{testimonial.industry}</Badge>
                  </div>
                  
                  <blockquote className="text-slate-400 mb-4 italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="text-sm">
                    <p className="font-semibold text-white group-hover:text-emerald-300">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 glow-text">
              Why Industry Leaders Choose SMAC
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-glow text-center group hover:scale-[1.04] transition-all duration-300 border border-white/10 bg-slate-950/80 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300">
                  Quality Assurance
                </h3>
                <p className="text-slate-400">
                  ISO 9001:2015 certified manufacturing processes ensuring 
                  consistent quality and reliability for critical applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-glow text-center group hover:scale-[1.04] transition-all duration-300 border border-white/10 bg-slate-950/80 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300">
                  Timely Delivery
                </h3>
                <p className="text-slate-400">
                  99.2% on-time delivery rate with efficient logistics and 
                  project management ensuring your deadlines are met.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-glow text-center group hover:scale-[1.04] transition-all duration-300 border border-white/10 bg-slate-950/80 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300">
                  Technical Expertise
                </h3>
                <p className="text-slate-400">
                  7+ years of specialized experience in defence and industrial 
                  applications with dedicated engineering support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;