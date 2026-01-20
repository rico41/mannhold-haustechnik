"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { company } from "@/lib/data";
import { getMainServices } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

const services = getMainServices();

const navItems = [
  {
    label: "Leistungen",
    href: "/leistungen",
    children: services.map((service) => ({
      label: service.shortTitle,
      href: `/leistungen/${service.slug}`,
      description: service.description.slice(0, 80) + "...",
    })),
  },
  {
    label: "Standorte",
    href: "/standorte",
    children: locations.map((location) => ({
      label: location.name,
      href: `/standorte/${location.slug}`,
      description: location.region === "berlin" ? "Berlin" : "Brandenburg",
    })),
  },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Passive listener für bessere Performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      )}
    >
      <div className="container-custom">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-end gap-6 py-2 text-sm text-muted-foreground border-b border-border/50">
          <a
            href={`tel:${company.contact.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="Telefonnummer anrufen"
          >
            <Phone className="h-4 w-4" />
            {company.contact.phoneDisplay}
          </a>
          <span>{company.hours.weekdays}</span>
        </div>

        {/* Main Nav */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Zur Startseite"
          >
            <img 
              src="/images/logo.svg" 
              alt="Mannhold Haustechnik Logo" 
              width={180}
              height={48}
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger
                        className={cn(
                          "text-sm font-medium",
                          pathname.startsWith(item.href)
                            ? "text-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.label}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            pathname === item.href
                              ? "text-primary"
                              : "text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/kontakt">Kostenlose Beratung</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b">
                  <Link
                    href="/"
                    onClick={handleCloseMobileMenu}
                  >
                    <img 
                      src="/images/logo.svg" 
                      alt="Mannhold Haustechnik Logo" 
                      width={150}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>

                {/* Mobile Nav Items */}
                <nav id="mobile-navigation" className="flex-1 overflow-y-auto p-6" aria-label="Hauptnavigation">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        {item.children ? (
                          <MobileNavDropdown
                            item={item}
                            pathname={pathname}
                            onClose={handleCloseMobileMenu}
                          />
                        ) : (
                          <Link
                            href={item.href}
                            onClick={handleCloseMobileMenu}
                            className={cn(
                              "block py-3 px-4 rounded-lg text-base font-medium transition-colors",
                              pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-accent"
                            )}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Footer */}
                <div className="p-6 border-t space-y-4">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/kontakt" onClick={handleCloseMobileMenu}>
                      Kostenlose Beratung
                    </Link>
                  </Button>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    {company.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

type MobileNavDropdownProps = {
  item: {
    label: string;
    href: string;
    children: { label: string; href: string; description: string }[];
  };
  pathname: string;
  onClose: () => void;
};

const MobileNavDropdown = ({
  item,
  pathname,
  onClose,
}: MobileNavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between w-full py-3 px-4 rounded-lg text-base font-medium transition-colors",
          pathname.startsWith(item.href)
            ? "bg-primary/10 text-primary"
            : "hover:bg-accent"
        )}
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <ul className="mt-2 ml-4 space-y-1">
          <li>
            <Link
              href={item.href}
              onClick={onClose}
              className="block py-2 px-4 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              Alle {item.label}
            </Link>
          </li>
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onClose}
                className={cn(
                  "block py-2 px-4 rounded-lg text-sm transition-colors",
                  pathname === child.href
                    ? "text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
