import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";
import profileSajid from "@/assets/profile-sajid.jpg";
import profileZahid from "@/assets/profile-zahid.jpg";

const About = () => {
  useSEO({
    title: "About SMAC - Defence Manufacturing Company Pakistan | Sajid Mumtaz & Company",
    description: "SMAC (Sajid Mumtaz & Company) founded in 2019 in Rawalpindi Pakistan. Leading defence manufacturer of military parts, precision components & industrial equipment. Trusted by armed forces.",
    keywords: "SMAC about, Sajid Mumtaz Company, defence manufacturer Rawalpindi, military parts company Pakistan, precision manufacturing, Sheikh Muhammad Sajid, Mumtaz Hussain",
    canonicalPath: "/about",
  });
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To become the leading manufacturer of high-standard, precision-engineered military and defense parts—delivering best-in-class quality, reliable performance, and on-time solutions that meet the critical needs of defense organizations.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading provider of defence and industrial products in the region, setting industry standards for quality and reliability.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, Integrity, Innovation, and Customer-centricity drive everything we do in serving our valued clients.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Experienced professionals with decades of expertise in defence manufacturing, engineering, and industrial solutions.",
    },
  ];

  const achievements = [
    "Established in 2019",
    "Trusted by Military & Defence Organizations",
    "High-Precision Manufacturing Excellence",
    "International Quality Standards Compliance",
    "State-of-the-Art Manufacturing Facilities",
    "Highly Skilled & Dedicated Workforce",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 glow-text">
              About SMAC
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manufacturing world-class military and defense parts that meet the highest international standards
            </p>
          </div>
        </div>
      </section>

      {/* In Loving Memory Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Photo */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative">
                <div className="w-64 h-80 overflow-hidden rounded-lg border-l-4 border-primary shadow-2xl">
                  <img 
                    src="https://i.ibb.co/fd77YNtT/Whats-App-Image-2025-11-28-at-20-08-20-b0846ff0.jpg" 
                    alt="Mumtaz Hussain - Late Co-Founder"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Mumtaz Hussain</h3>
                <p className="text-sm text-primary font-medium uppercase tracking-wider">(Late) Co-Founder</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold">
                <span className="text-primary">IN</span> <span className="text-foreground">LOVING MEMORY</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  We honor the memory of our beloved co-founder, <strong className="text-foreground">Mumtaz Hussain</strong>, whose vision, 
                  dedication, and unwavering commitment to excellence laid the foundation of SMAC. 
                  His passion for precision engineering and defense manufacturing continues to inspire 
                  every member of our team.
                </p>
                <p>
                  Together with <strong className="text-foreground">Sheikh Muhammad Sajid</strong>, he established SMAC in 2019 with a dream 
                  to create world-class military and defense components. Though he left us too soon in 
                  2021, his spirit lives on in every product we manufacture and every standard we uphold.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-4 bg-card/50 rounded-r-lg">
                <p className="text-lg italic text-muted-foreground">
                  "His legacy is not just in the company he built, but in the values he 
                  instilled—quality, integrity, and a relentless pursuit of excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2019 by Sheikh Muhammad Sajid and Mumtaz Hussain (Late), Sajid Mumtaz & Company (SMAC) 
                was established with a clear vision: to manufacture world-class military and defense parts and equipment 
                that meet the highest international standards. Our name reflects the strong partnership and shared 
                commitment of our founders to excellence, integrity, and innovation in the defense manufacturing sector.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At SMAC, we specialize in delivering high-precision components designed to perform in the most demanding 
                environments. Backed by a highly qualified management team and a skilled, dedicated workforce, we ensure 
                strict quality control across every stage of production—from design to delivery.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment goes beyond products. We take great pride in maintaining a workplace that values our 
                employees' welfare and professional growth. Combined with a strong focus on timely delivery and client 
                satisfaction, SMAC is on a mission to become a trusted leader in the global defense manufacturing industry.
              </p>
              <Button variant="neon" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1lE0lUYGuIaofYx_SRe3PAgMmzhqc7OZF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download Company Profile
                </a>
              </Button>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 border border-border">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow-text">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground">
              Built on strong principles and driven by excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-glow group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 glow-text">
              Leadership Messages
            </h2>
          </div>
          
          <div className="space-y-16">
            {/* COO Message - Photo Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 flex flex-col items-center pt-4">
                <div className="w-48 h-48 rounded-full border-4 border-primary/30 mb-4 overflow-hidden" style={{backgroundColor: '#0a1628'}}>
                  <img src={profileSajid} alt="Sheikh Muhammad Sajid - Co-Founder & COO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-primary text-center">Sheikh Muhammad Sajid</h3>
                <p className="text-sm text-muted-foreground text-center">Co-Founder & C.O.O</p>
              </div>
              <Card className="lg:col-span-2 card-glow">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary">Message from the Co-Founder & C.O.O</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Welcome, and thank you for visiting our website.</p>
                    <p>
                      Our story is deeply rooted in tradition, resilience, and purpose. It all began when my father 
                      Sheikh Muhammad Sadiq (Late) started our family business, dedicating over 40 years of his life 
                      to manufacturing precision components for military and defense organizations.
                    </p>
                    <p>
                      Inspired by his journey, I set out to continue this mission with a broader vision and modern approach. 
                      Alongside my childhood friend—my brother in spirit—Mumtaz Hussain we co-founded this company, 
                      SMAC (SAJID MUMTAZ & COMPANY) in 2019 to serve the defense industry with excellence, innovation, 
                      and integrity. Tragically, I lost him just two years after we began. Though he is no longer with us, 
                      his spirit and passion remain a guiding force in everything we do.
                    </p>
                    <p>
                      This company stands as a tribute to both his memory and my father's lifelong dedication. Our purpose 
                      is clear: to manufacture military and defense parts with precision, adhering to the highest international 
                      standards. We take immense pride in the strength of our management team, the expertise of our highly 
                      skilled workforce, and the robust quality control systems we have put in place.
                    </p>
                    <p>
                      But beyond machines and materials, we believe in people. Our work culture is built on great moral 
                      values, mutual respect, and a strong commitment to the welfare of every staff member. We believe 
                      that when people are valued, quality follows naturally.
                    </p>
                    <p className="font-semibold text-foreground">
                      We are proud of our past, committed to our present, and optimistic about the future. Thank you 
                      for being a part of this journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CEO Message - Text Left, Photo Right (alternate layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <Card className="lg:col-span-2 card-glow lg:order-1 order-2">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary">Message from the CEO</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      It is with a deep sense of responsibility and pride that I address you today—not only as the CEO 
                      of this esteemed organization, but as the brother of its visionary founder, Mumtaz Hussain (Late) 
                      whose legacy continues to guide every step we take.
                    </p>
                    <p>
                      My late brother built this company with unwavering commitment to quality, integrity, and service 
                      to our nation. His passion for excellence in the manufacturing of defense and military equipment 
                      laid the foundation for everything we stand for today. While his presence is deeply missed, his 
                      vision lives on—stronger than ever.
                    </p>
                    <p>
                      As we move forward, I am fully committed to honoring his legacy by taking this company to even 
                      greater heights. We are investing in high-class management, cutting-edge machinery, and the 
                      advanced technologies available. At the heart of our operations are our highly skilled workers—professionals 
                      whose expertise, dedication, and craftsmanship define the quality of every part and product we deliver.
                    </p>
                    <p>Our focus remains steadfast on the core pillars that built this company:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Precision and performance in every component we manufacture</li>
                      <li>Strict adherence to international quality standards and certifications</li>
                      <li>Ethical business practices and strong moral values</li>
                      <li>A deep commitment to the welfare and growth of our employees</li>
                    </ul>
                    <p>
                      This is more than a company—it is a mission. A mission to support our armed forces with the highest 
                      quality defense manufacturing solutions, and a mission to uphold the principles that my brother lived by.
                    </p>
                    <p className="font-semibold text-foreground">
                      Thank you for your trust, your partnership, and your belief in our journey. Together, we will continue 
                      to build a future that honors the past and embraces the possibilities ahead.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:col-span-1 flex flex-col items-center pt-4 lg:order-2 order-1">
                <div className="w-48 h-48 rounded-full border-4 border-primary/30 mb-4 overflow-hidden" style={{backgroundColor: '#112244'}}>
                  <img src={profileZahid} alt="Zahid Hussain - CEO" className="w-full h-full object-cover object-center" />
                </div>
                <h3 className="text-xl font-bold text-primary text-center">Zahid Hussain</h3>
                <p className="text-sm text-muted-foreground text-center">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Strategy */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 glow-text">
              Business Strategy & Goals
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously investing in advanced manufacturing technologies and processes 
                  to deliver cutting-edge solutions that meet evolving industry demands.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Quality</h3>
                <p className="text-muted-foreground">
                  Maintaining the highest standards of quality control and assurance throughout 
                  our manufacturing and sourcing processes to ensure customer satisfaction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Partnership</h3>
                <p className="text-muted-foreground">
                  Building long-term partnerships with clients, suppliers, and stakeholders 
                  to create mutual value and sustainable growth in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;