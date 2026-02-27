"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";

const NavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Our Philosophy", href: "/philosophy" },
  { label: "Contact", href: "/contact" },
];

const Services = [
  {
    title: "AI and ML Solutions",
    href: "/artificial-intelligence-and-machine-learning-solutions",
  },
  {
    title: "Business Analysis",
    href: "/business-analysis",
  },
  {
    title: "Chatbot Development",
    href: "/chatbot-development",
  },
  {
    title: "Cybersecurity",
    href: "/cybersecurity",
  },
  {
    title: "Data Analytics",
    href: "/data-analytics",
  },
  {
    title: "Robotic Process Automation",
    href: "/robotic-process-automation",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-background/90 sticky top-0 z-50 w-full backdrop-blur-lg">
      <div className="mx-auto flex max-w-360 items-center justify-between p-4 md:px-6">
        <Link href="/" className="z-50">
          <Image
            src="/intelliqon.svg"
            alt="intelliqon"
            width={120}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="bg-accent flex items-center rounded-md p-0.5 font-semibold">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {NavLinks.map((link) => {
                  const isActive = pathname === link.href;

                  if (link.label == "Services") {
                    return (
                      <NavigationMenuItem
                        key={link.label}
                        className="rounded-md"
                      >
                        <NavigationMenuTrigger
                          className={`inline-flex items-center justify-center rounded-md px-4 py-1.5 transition-all ${
                            isActive
                              ? "bg-background hover:bg-background border shadow-sm"
                              : "hover:bg-background/80 hover:text-foreground bg-accent hover:border"
                          }`}
                        >
                          <Link href="/services">Services</Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {Services.map((service) => (
                              <NavigationMenuItem key={service.title}>
                                <NavigationMenuLink
                                  href={service.href}
                                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                                >
                                  <div className="text-sm leading-none font-medium">
                                    {service.title}
                                  </div>
                                </NavigationMenuLink>
                              </NavigationMenuItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={link.label} className="rounded-md">
                      <NavigationMenuLink
                        href={link.href}
                        className={`inline-flex items-center justify-center rounded-md px-4 py-1.5 transition-all ${
                          isActive
                            ? "bg-background hover:bg-background border shadow-sm"
                            : "hover:bg-background/80 hover:text-foreground hover:border"
                        }`}
                        active={isActive}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <Button asChild className="hidden px-4 text-sm font-semibold md:flex">
          <Link href="/signin">Sign In</Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <HugeiconsIcon
                  icon={Menu01Icon}
                  strokeWidth={2}
                  className="h-5! w-5!"
                />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[300px] flex-col pl-3 shadow-2xl sm:w-[400px]"
            >
              <SheetTitle className="mt-4 text-2xl font-semibold tracking-tight">
                Menu
              </SheetTitle>
              <nav className="flex h-full flex-col gap-2 pt-16">
                {NavLinks.map((link) => {
                  const isActive = pathname === link.href;

                  if (link.label === "Services") {
                    return (
                      <div key={link.label}>
                        <div className="group flex items-center gap-x-2 text-2xl font-semibold tracking-tight transition-colors">
                          <SheetClose asChild>
                            <Link
                              href={link.href}
                              className="hover:text-primary flex items-center"
                            >
                              {isActive ? (
                                <span className="bg-primary mr-2 h-[2px] w-5 rounded-full transition-all duration-300" />
                              ) : (
                                <span className="bg-primary mr-0 h-[2px] w-0 rounded-full opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:w-5 group-hover:opacity-100" />
                              )}
                              <span
                                className={
                                  isActive
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                                }
                              >
                                {link.label}
                              </span>
                            </Link>
                          </SheetClose>
                          <div
                            className="mt-1 ml-3 cursor-pointer"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                          >
                            <HugeiconsIcon
                              icon={ArrowDown01Icon}
                              strokeWidth={3}
                              className={`text-muted-foreground size-6 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                            />
                          </div>
                        </div>
                        <div
                          className={`flex flex-col gap-2 overflow-hidden pl-7 transition-all duration-300 ${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                          {Services.map((service) => (
                            <SheetClose asChild key={service.title}>
                              <Link
                                href={service.href}
                                className="text-muted-foreground hover:text-foreground text-lg transition-colors"
                              >
                                {service.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-primary group flex items-center text-2xl font-semibold tracking-tight transition-colors"
                      >
                        {isActive ? (
                          <span className="bg-primary mr-2 h-[2px] w-5 rounded-full transition-all duration-300" />
                        ) : (
                          <span className="bg-primary mr-0 h-[2px] w-0 rounded-full opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:w-5 group-hover:opacity-100" />
                        )}
                        <span
                          className={
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }
                        >
                          {link.label}
                        </span>
                      </Link>
                    </SheetClose>
                  );
                })}
                <Button className="mt-auto mr-3 mb-5 py-7">
                  <Link
                    href="/signin"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Sign In
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
