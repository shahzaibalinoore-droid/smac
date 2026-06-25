import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Grid3x3, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

// Import product images
import cradleAssemblyImg from "@/assets/product-cradle-new.jpg";
import periscopeImg from "@/assets/product-periscope.jpg";
import picatinnyRailImg from "@/assets/product-picatinny-rail.jpg";
import product3Img from "@/assets/product-3.png";
import productCompressorImg from "@/assets/product-compressor.png";
import product4Img from "@/assets/Product-4.jpg";
import product5Img from "@/assets/Product-5.jpg";
import product6Img from "@/assets/Product-6.jpg";
import product7Img from "@/assets/Product-7.jpg";
import product8Img from "@/assets/Product-8.jpg";
import product9Img from "@/assets/Product-9.jpg";
import product10Img from "@/assets/Product-10.jpg";
import product11Img from "@/assets/Product-11.jpg";
import product12Img from "@/assets/Product-12.jpg";
import product13Img from "@/assets/Product-13.jpg";
import product14Img from "@/assets/Product-14.jpg";
import product15Img from "@/assets/Product-15.jpg";
import product16Img from "@/assets/Product-16.jpg";
import product17Img from "@/assets/Product-17.jpg";
import product18Img from "@/assets/Product-18.jpg";
import product19Img from "@/assets/Product-19.jpg";
import product20Img from "@/assets/Product-20.jpg";
import product21Img from "@/assets/Product-21.jpg";
import product22Img from "@/assets/Product-22.jpg";
import stretcherMountainImg from "@/assets/product-stretcher-mountain.png";
import tripodSystemImg from "@/assets/product-tripod-system.png";
import thermalSleeveImg from "@/assets/product-thermal-new.png";
import miscellaneousImg from "@/assets/product-miscellaneous-new.png";
import machineryImg from "@/assets/product-machinery-new.png";
import machineryPlainImg from "@/assets/product-machinery.png";
import gpboxImg from "@/assets/product-gpbox.jpg";

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

const Products = () => {
  useSEO({
    title: "Defence Products - Picatinny Rails, Thermal Sleeves, Tripod Systems | SMAC Pakistan",
    description: "Browse SMAC's defence product range: picatinny rails, thermal sleeves, tripod systems, cradle assemblies, periscope systems, GP boxes, stretcher mountain & machinery. Military-grade quality from Pakistan.",
    keywords: "picatinny rails Pakistan, thermal sleeves manufacturer, tripod systems defence, cradle assembly military, periscope systems, GP box, stretcher mountain, defence products Pakistan",
    canonicalPath: "/products",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Product categories with single image each
  const productCategories: ProductCategory[] = [
    {
      id: "product-3",
      name: "Picatinny Rails MG1A3",
      description: "Precision-manufactured mounting rails to military specifications",
      image: product3Img,
    },
    {
      id: "product-4",
      name: "1",
      description: "1",
      image: product4Img,
    },
    {
      id: "product-5",
      name: "Tool",
      description: "Multi-Purpose",
      image: product5Img,
    },
    {
      id: "product-6",
      name: "Connector Yoke",
      description: "Al Zarar",
      image: product6Img,
    },
    {
      id: "product-7",
      name: "Firing Pin",
      description: "125mm Gun",
      image: product7Img,
    },
    {
      id: "product-8",
      name: "Level Elevation",
      description: "125mm Gun",
      image: product8Img,
    },
    {
      id: "product-9",
      name: "Cocking Lever",
      description: "T80 UD",
      image: product9Img,
    },
    {
      id: "product-10",
      name: "Gear Shaft",
      description: "T80 UD",
      image: product10Img,
    },
    {
      id: "product-11",
      name: "Gear",
      description: "125mm Gun",
      image: product11Img,
    },
    {
      id: "product-machinery-plain",
      name: "",
      description: "",
      image: machineryPlainImg,
    },
    {
      id: "product-12",
      name: "",
      description: "",
      image: product12Img,
    },
    {
      id: "product-13",
      name: "Tool",
      description: "Multi-Purpose",
      image: product13Img,
    },
    {
      id: "product-14",
      name: "",
      description: "",
      image: product14Img,
    },
    {
      id: "product-15",
      name: "Sleeve",
      description: "105mm Gun",
      image: product15Img,
    },
    {
      id: "product-16",
      name: "",
      description: "",
      image: product16Img,
    },
    {
      id: "product-17",
      name: "Track Pad",
      description: "ACP M113",
      image: product17Img,
    },
    {
      id: "product-18",
      name: "Load Plates",
      description: "125mm Gun Parts",
      image: product18Img,
    },
    {
      id: "product-19",
      name: "Gear",
      description: "APC M113",
      image: product19Img,
    },
     {
      id: "product-20",
      name: "",
      description: "",
      image: product20Img,
    },
    {
      id: "product-21",
      name: "",
      description: "",
      image: product21Img,
    },
   {
      id: "product-22",
      name: "Core Bore Equbrator",
      description: "",
      image: product22Img,
    },
    {
      id: "product-compressor",
      name: "Pacatinny Rail G3",
      description: "i want you to add in product page  Product-3 img but with empty name and descprition",
      image: productCompressorImg,
    },
    {
      id: "product-machinery",
      name: "",
      description: "",
      image: machineryImg,
    },
    {
      id: "tripod",
      name: "Air Pipe",
      description: "Heavy-duty tripod mounting systems for defence applications",
      image: tripodSystemImg,
    },
    {
      id: "thermal",
      name: "Igniter Assy",
      description: "APC M113",
      image: thermalSleeveImg,
    },
    {
      id: "rails",
      name: "Picatinny Rails (Quad Rail)",
      description: "Precision-manufactured mounting rails to military specifications",
      image: picatinnyRailImg,
    },
    {
      id: "mechanical",
      name: "Miscellaneous Mechanical Products",
      description: "Custom mechanical components and assemblies",
      image: miscellaneousImg,
    },
    {
      id: "stretcher",
      name: "Stretcher Mountain",
      description: "Specialized mountain rescue stretchers for extreme conditions",
      image: stretcherMountainImg,
    },
    {
      id: "periscope",
      name: "Periscope M-17",
      description: "Advanced optical systems for surveillance and targeting",
      image: periscopeImg,
    },
    {
      id: "gpbox",
      name: "PTGP Box",
      description: "General Purpose Box",
      image: gpboxImg,
    },
    {
      id: "machinery",
      name: "Seat",
      description: "Driver Seat APC Talha1",
      image: machineryImg,
    },
    {
      id: "cradle",
      name: "Thermal Sleeves",
      description: "Thermo Procetive Shell",
      image: cradleAssemblyImg,
    },
  ];

  const filteredCategories = productCategories.filter((category) => {
    const matchesSearch = 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Products</span>
          </div>

          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Grid3x3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Product Categories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Engineering Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Precision-manufactured defence and industrial products designed for mission-critical applications
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search product categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary/40 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedCategories.map((category) => (
              <div
                key={category.id}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_70px_rgba(16,185,129,0.18)]"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-slate-900">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xl font-semibold text-white">{category.name}</p>
                  <p className="text-sm text-slate-400">{category.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="px-5 py-3 rounded-full border border-white/10 bg-slate-900 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`px-5 py-3 rounded-full border ${currentPage === 2 ? "border-emerald-400 bg-emerald-400/10 text-emerald-300" : "border-white/10 bg-slate-900 text-white"} transition hover:bg-slate-800`}
              >
                Page 2
              </button>
              <button
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="px-5 py-3 rounded-full border border-white/10 bg-slate-900 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                No categories found matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-primary hover:underline font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.1),transparent_60%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text animate-fade-in">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in">
            Our engineering team specializes in custom manufacturing and can create products tailored to your exact specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a 
              href="https://wa.me/923215003408"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 inline-block text-center"
            >
              Request Custom Quote
            </a>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-block text-center"
            >
              Contact Engineering Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
