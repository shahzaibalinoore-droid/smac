import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import useSEO from "@/hooks/useSEO";

const Contact = () => {
  useSEO({
    title: "Contact SMAC - Defence Products Inquiry | Military Parts Manufacturer Pakistan",
    description: "Contact SMAC for defence product inquiries, custom manufacturing quotes, picatinny rails, thermal sleeves & military components. Office in Rawalpindi, factory in Islamabad. Call +923215003408.",
    keywords: "contact SMAC, defence products inquiry Pakistan, military parts quote, custom manufacturing Rawalpindi, Islamabad factory",
    canonicalPath: "/contact",
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    inquiry: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build mailto link with CC
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nInquiry Type: ${formData.inquiry}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:info@smac.com.pk?cc=zahid.hussain.smac@gmail.com&subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email Client Opened",
      description: "Please send the email from your email client.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      inquiry: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Rawalpindi, Pakistan", "Manufacturing Facility in Islamabad"],
      links: [],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+923445523408", "+923004561348", "+923215003408", "Available Mon-Fri 9AM-6PM"],
      links: ["https://wa.me/923445523408", "https://wa.me/923004561348", "https://wa.me/923215003408", null],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@smac.com.pk", "Response within 24 hours"],
      links: ["mailto:info@smac.com.pk", null],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      links: [],
    },
  ];

  const inquiryTypes = [
    "Product Information",
    "Custom Manufacturing",
    "Bulk Orders",
    "Technical Support",
    "Partnership Opportunities",
    "General Inquiry",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 glow-text">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for your defence and industrial product requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-glow text-center">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => {
                    const link = info.links && info.links[detailIndex];
                    return link ? (
                      <a
                        key={detailIndex}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm mb-1 block hover:text-primary transition-colors underline-offset-2 hover:underline"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select value={formData.inquiry} onValueChange={(value) => setFormData({...formData, inquiry: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Brief subject line"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your requirements, specifications, or questions..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" variant="neon" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location & Additional Info */}
            <div className="space-y-8">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <h4 className="font-semibold text-primary mb-2">Head Office</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Rawalpindi, Pakistan
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Administrative headquarters and customer service center
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <h4 className="font-semibold text-primary mb-2">Manufacturing Facility</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Islamabad, Pakistan
                      </p>
                      <p className="text-muted-foreground text-sm">
                        State-of-the-art manufacturing and quality control facility
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Quick Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-foreground">24-hour response guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-foreground">Free technical consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-foreground">Custom quote within 48 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-foreground">Dedicated account manager</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-4 text-primary">
                    Emergency Support
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    For urgent defence and critical industrial requirements
                  </p>
                  <Button variant="outline_neon" className="w-full">
                    Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;