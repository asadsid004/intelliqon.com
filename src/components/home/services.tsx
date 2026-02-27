import Image from "next/image";
import Link from "next/link";
import { DashedLine } from "../dashed-line";
import { Card, CardContent } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const services = [
  {
    title: "AI & ML Services",
    description:
      "Elevate your business with our tailored AI and ML services, transforming data into actionable insights and driving innovation.",
    image: "/services/ai-ml.png",
    href: "/services/artificial-intelligence-and-machine-learning-solutions",
  },
  {
    title: "Business Consulting Services",
    description:
      "Data-driven strategies that optimize operations, reduce costs, and position your business for long-term success.",
    image: "/services/business-consulting.png",
    href: "/services/business-consulting",
  },
  {
    title: "Chatbot Development",
    description:
      "Intelligent chatbots that enhance customer experience, automate support, and free your team to focus on high-value work.",
    image: "/services/chatbot.png",
    href: "/services/chatbot",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive security solutions that protect your data, ensure compliance, and give you confidence against evolving threats.",
    image: "/services/cybersecurity.png",
    href: "/services/cybersecurity",
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into clear insights that inform smarter decisions, reveal opportunities, and improve business performance.",
    image: "/services/data-analytics.png",
    href: "/services/data-analytics",
  },
  {
    title: "RPA Solutions",
    description:
      "Automate repetitive tasks, eliminate errors, and free your team to focus on strategic work that grows your business.",
    image: "/services/rpa.png",
    href: "/services/robotic-process-automation",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services">
      <div className="mx-auto mt-20 max-w-360 px-4">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            TRANSFORM CHALLENGES INTO COMPETITIVE ADVANTAGES
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 max-w-4xl items-center space-y-3 text-center md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Innovative Business Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-snug">
            Strategic technology solutions designed to drive measurable results
            and sustainable growth for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid gap-4 md:mt-12 md:gap-6 lg:mt-20">
          {/* First Row - 3 cards */}
          <Card className="rounded-3xl">
            <CardContent className="flex p-0 max-md:flex-col">
              {services.slice(0, 3).map((service, i) => (
                <div key={i} className="flex flex-1 max-md:flex-col">
                  <div className="flex-1 p-4 md:p-6">
                    <div className="relative aspect-[1.28/1] overflow-hidden rounded-2xl bg-linear-to-br from-slate-50 to-slate-100">
                      <Image
                        src={service.image}
                        alt={`${service.title} illustration`}
                        fill
                        className="scale-110 object-cover object-center"
                      />
                    </div>
                    <Link
                      href={service.href}
                      className="group flex items-start justify-between gap-4 pt-6"
                    >
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl leading-tight font-bold tracking-tight md:text-2xl">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                          {service.description}
                        </p>
                      </div>
                      <div className="border-border group-hover:border-primary mt-1 shrink-0 rounded-full border p-2 transition-colors">
                        <HugeiconsIcon
                          icon={ArrowRight02Icon}
                          strokeWidth={2}
                          className="size-5 transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  </div>
                  {i < 2 && (
                    <div className="relative hidden md:block">
                      <DashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < 2 && (
                    <div className="relative block md:hidden">
                      <DashedLine orientation="horizontal" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Second Row - 3 cards */}
          <Card className="rounded-3xl">
            <CardContent className="flex p-0 max-md:flex-col">
              {services.slice(3, 6).map((service, i) => (
                <div key={i} className="flex flex-1 max-md:flex-col">
                  <div className="flex-1 p-4 md:p-6">
                    <div className="relative aspect-[1.28/1] overflow-hidden rounded-2xl bg-linear-to-br from-slate-50 to-slate-100">
                      <Image
                        src={service.image}
                        alt={`${service.title} illustration`}
                        fill
                        className="scale-110 object-cover object-center"
                      />
                    </div>
                    <Link
                      href={service.href}
                      className="group flex items-start justify-between gap-4 pt-6"
                    >
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl leading-tight font-bold tracking-tight md:text-2xl">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                          {service.description}
                        </p>
                      </div>
                      <div className="border-border group-hover:border-primary mt-1 shrink-0 rounded-full border p-2 transition-colors">
                        <HugeiconsIcon
                          icon={ArrowRight02Icon}
                          strokeWidth={2}
                          className="size-5 transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  </div>
                  {i < 2 && (
                    <div className="relative hidden md:block">
                      <DashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < 2 && (
                    <div className="relative block md:hidden">
                      <DashedLine orientation="horizontal" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
