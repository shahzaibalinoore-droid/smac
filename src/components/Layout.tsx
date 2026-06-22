import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useVisitorTracking();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;