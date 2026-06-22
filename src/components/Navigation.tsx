import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import zahidLogo from "@/assets/zahid-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    path: "/about"
  }, {
    name: "Products",
    path: "/products"
  }, {
    name: "Clients",
    path: "/clients"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img alt="Zahid Logo" className="h-10 w-auto" src="/lovable-uploads/d3ecaeae-7e9d-4715-9a07-274280186980.png" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`transition-colors duration-300 ${isActive(item.path) ? "text-primary glow-text font-semibold" : "text-foreground hover:text-primary"}`}>
                {item.name}
              </Link>)}
            <Button variant="neon" size="sm" asChild>
              <a href="https://wa.me/923215003408" target="_blank" rel="noopener noreferrer">
                Get Quote
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 rounded-lg mt-2 border border-border">
              {navItems.map(item => <Link key={item.name} to={item.path} className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${isActive(item.path) ? "text-primary glow-text bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="px-3 py-2">
                <Button variant="neon" size="sm" className="w-full" asChild>
                  <a href="https://wa.me/923215003408" target="_blank" rel="noopener noreferrer">
                    Get Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;