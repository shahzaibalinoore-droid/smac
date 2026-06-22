import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import smacLogo from "@/assets/smac-logo.png";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              
              <div>
                
                
              </div>
            </div>
            <img alt="SMAC Footer Logo" className="h-20 w-auto mb-4" src="https://i.ibb.co/m5FgVVfg/Screenshot-2025-12-28-113916.png" />
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading provider of industrial and defence solutions with over 1000+ trusted clients. 
              Specializing in precision manufacturing, sourcing, and indenting services.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline_neon" size="sm" asChild>
                <a href="https://drive.google.com/file/d/1lE0lUYGuIaofYx_SRe3PAgMmzhqc7OZF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{
              name: "About Us",
              path: "/about"
            }, {
              name: "Products",
              path: "/products"
            }, {
              name: "Services",
              path: "/services"
            }, {
              name: "Capabilities",
              path: "/capabilities"
            }, {
              name: "Contact",
              path: "/contact"
            }].map(link => <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm">Plot No 9/E Industrial Area Humak Islamabad</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <p>+923445523408</p>
                  <p>+923004561348</p>
                  <p>+923215003408</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@smac.com.pk</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm">www.smac.com.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SMAC. All rights reserved. Defence & Industrial Solutions Provider.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;