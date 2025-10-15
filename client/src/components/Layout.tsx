import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { createPageUrl } from "@/lib/utils";
import { GraduationCap, Calendar, BookOpen, Mail, Users as UsersIcon, Sun, Moon, ChevronUp, ChevronDown, Menu, X, Info, Newspaper, Clock, Library, Trophy, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  title: string;
  url?: string;
  icon: any;
  dropdown?: {
    title: string;
    url: string;
    icon: any;
  }[];
  external?: boolean;
}

const navigationItems: NavigationItem[] = [
  { title: "Ballina", url: createPageUrl("Ballina"), icon: GraduationCap },
  { 
    title: "Rreth Nesh", 
    icon: Info,
    dropdown: [
      { title: "Rreth Nesh", url: createPageUrl("RrethNesh"), icon: Info },
      { title: "Historia", url: createPageUrl("Historia"), icon: Clock },
      { title: "Rregullorja", url: createPageUrl("Rregullorja"), icon: BookOpen },
      { title: "FAQ", url: createPageUrl("FAQ"), icon: Info },
    ]
  },
  {
    title: "Akademike",
    icon: BookOpen,
    dropdown: [
      { title: "Orari", url: createPageUrl("Orari"), icon: Clock },
      { title: "Materiale", url: createPageUrl("Materiale"), icon: BookOpen },
      { title: "Matura 2025", url: createPageUrl("MaturaShtetrore"), icon: Trophy },
    ]
  },
  { title: "Biblioteka", url: createPageUrl("Biblioteka"), icon: Library },
  { title: "Klube", url: createPageUrl("Klube"), icon: UsersIcon },
  {
    title: "Ngjarje",
    icon: Calendar,
    dropdown: [
      { title: "Lajme", url: createPageUrl("Lajme"), icon: Newspaper },
      { title: "Kalendari", url: createPageUrl("Kalendari"), icon: Calendar },
    ]
  },
  { title: "Senati", url: createPageUrl("Senati"), icon: UsersIcon },
  { title: "Kontakti", url: createPageUrl("Kontakti"), icon: Mail },
  { title: "Portali", url: "https://smip.al", icon: Globe, external: true },
];

function DropdownMenu({ item, theme }: { item: NavigationItem; theme: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-gray-300 hover:text-cyan-400">
        <item.icon className="w-4 h-4" />
        {item.title}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 mt-2 w-48 ${theme === "dark" ? "bg-[#0f1823]" : "bg-white"} border ${theme === "dark" ? "border-gray-700" : "border-gray-200"} rounded-xl shadow-xl overflow-hidden z-50`}
          >
            {item.dropdown.map((subItem, index) => {
              const isActive = location === subItem.url;
              return (
                <Link
                  key={index}
                  href={subItem.url}
                  className={`block px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : `${theme === "dark" ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"} hover:text-cyan-400`
                  } flex items-center gap-2`}
                >
                  {subItem.icon && <subItem.icon className="w-4 h-4" />}
                  {subItem.title}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#071018] text-gray-100" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>
      <style>{`
        :root {
          --primary-teal: ${theme === "dark" ? "#0ea5e9" : "#0891b2"};
          --primary-cyan: ${theme === "dark" ? "#06b6d4" : "#0284c7"};
          --dark-bg: ${theme === "dark" ? "#071018" : "#f9fafb"};
          --dark-surface: ${theme === "dark" ? "#0f1823" : "#ffffff"};
          --dark-elevated: ${theme === "dark" ? "#1a2332" : "#f3f4f6"};
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-shimmer {
          background: linear-gradient(
            90deg,
            rgba(6, 182, 212, 0) 0%,
            rgba(6, 182, 212, 0.3) 50%,
            rgba(6, 182, 212, 0) 100%
          );
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 ${theme === "dark" ? "bg-[#0f1823]/95" : "bg-white/95"} backdrop-blur-lg border-b ${theme === "dark" ? "border-gray-800/50" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={createPageUrl("Ballina")} className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20"
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} tracking-tight`}>Gjimnazi Abdulla Keta</h1>
                <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Shkollë e Mesme</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => {
                if (item.dropdown) {
                  return <DropdownMenu key={item.title} item={item} theme={theme} />;
                }
                
                const isActive = !item.external && location === item.url;
                
                if (item.external) {
                  return (
                    <a
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 group text-gray-300 hover:text-cyan-400"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.title}
                      <Globe className="w-3 h-3 opacity-50" />
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={item.title}
                    href={item.url!}
                    className="relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-cyan-400" : `${theme === "dark" ? "text-gray-300" : "text-gray-700"} group-hover:text-cyan-400`
                    }`}>
                      <item.icon className="w-4 h-4 inline mr-1" />
                      {item.title}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${theme === "dark" ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-700"} hover:bg-cyan-500/20 transition-colors`}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} hover:text-cyan-400 transition-colors`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden pb-4 space-y-1 overflow-hidden"
              >
                {navigationItems.map((item, index) => {
                  if (item.dropdown) {
                    const isExpanded = expandedMobile === item.title;
                    return (
                      <div key={item.title}>
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setExpandedMobile(isExpanded ? null : item.title)}
                          className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100"
                          } hover:text-cyan-400`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4" />
                            {item.title}
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </motion.button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-1 space-y-1"
                            >
                              {item.dropdown!.map((subItem) => {
                                const isActive = location === subItem.url;
                                return (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.url}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                                      isActive
                                        ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400"
                                        : `${theme === "dark" ? "text-gray-400 hover:bg-gray-800/50" : "text-gray-600 hover:bg-gray-100"} hover:text-cyan-400`
                                    } flex items-center gap-2`}
                                  >
                                    {subItem.icon && <subItem.icon className="w-4 h-4" />}
                                    {subItem.title}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (item.external) {
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100"
                          } hover:text-cyan-400`}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.title}
                          <Globe className="w-3 h-3 opacity-50" />
                        </a>
                      </motion.div>
                    );
                  }

                  const isActive = location === item.url;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.url!}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400"
                            : `${theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100"} hover:text-cyan-400`
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.title}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`${theme === "dark" ? "bg-[#0f1823] border-gray-800/50" : "bg-white border-gray-200"} border-t mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"} mb-4`}>Gjimnazi Abdulla Keta</h3>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed`}>
                Një institucion edukativ me përvojë shumëvjeçare, i dedikuar për të ofruar edukim cilësor dhe zhvillim të plotë të nxënësve tanë.
              </p>
              
              {/* Social Media */}
              <div className="flex gap-3 mt-6">
                {[
                  
                  { icon: "📷", label: "Instagram", href: "https://www.instagram.com/gjimnaziabdullaketa/" },
                  { icon: "▶️", label: "Facebook", href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 ${theme === "dark" ? "bg-gray-800/50 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-teal-500/20 text-gray-400 border-gray-700/50" : "bg-gray-100 hover:bg-cyan-50 text-gray-600 border-gray-200"} rounded-lg flex items-center justify-center hover:text-cyan-400 transition-all duration-300 border hover:border-cyan-500/30 text-xl`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"} mb-4`}>Lidhje të Shpejta</h3>
              <ul className="space-y-2">
                {["Rreth Nesh", "Historia", "Rregullorja", "Klube", "Biblioteka", "Orari", "Lajme", "Materiale", "Kalendari", "Matura 2025"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={createPageUrl(item === "Matura 2025" ? "MaturaShtetrore" : item.replace(" ", ""))} 
                      className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} hover:text-cyan-400 text-sm transition-colors duration-300 inline-flex items-center gap-2 group`}
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"} mb-4`}>Kontakt</h3>
              <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                <li>Rruga "Abdulla Keta", Tiranë</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Tel: +355 4 123 4567</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Email: info@gjimnazi-keta.edu.al</li>
              </ul>
            </motion.div>
          </div>
          
          <div className={`border-t ${theme === "dark" ? "border-gray-800/50" : "border-gray-200"} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
            <p className={`${theme === "dark" ? "text-gray-500" : "text-gray-600"} text-sm`}>
              © 2025 Gjimnazi Abdulla Keta. Të gjitha të drejtat e rezervuara.
            </p>
            <div className="flex gap-6">
              <Link href="#" className={`${theme === "dark" ? "text-gray-500" : "text-gray-600"} hover:text-cyan-400 text-sm transition-colors`}>Privatësia</Link>
              <Link href="#" className={`${theme === "dark" ? "text-gray-500" : "text-gray-600"} hover:text-cyan-400 text-sm transition-colors`}>Kushtet</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
