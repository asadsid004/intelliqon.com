import { DashedLine } from "../dashed-line";
import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "End-to-End AI Solutions.",
    description:
      "From strategy to deployment, we guide you through every phase of AI implementation with proven methodologies.",
    className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
  {
    title: "Data-Driven Decision Making.",
    description:
      "Transform raw data into actionable insights that drive growth and competitive advantage.",
    className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
];

const bottomItems = [
  {
    title: "Intelligent Automation.",
    description:
      "Streamline operations with RPA and chatbot solutions that work 24/7.",
    className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
  {
    title: "Strategic Consulting.",
    description:
      "Expert guidance to optimize your business processes and unlock new opportunities.",
    className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
  {
    title: "Enterprise Security.",
    description:
      "Comprehensive cybersecurity solutions to protect your critical assets and ensure compliance.",
    className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="overflow-hidden">
      <div className="">
        <h2 className="mx-auto mt-24 max-w-360 px-4 text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Discover the Difference We Deliver
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-4xl px-4 text-center text-lg leading-relaxed">
          At Intelligon, we deliver comprehensive solutions tailored to meet
          each client&apos;s unique needs. With a proven track record of
          success, we&apos;re dedicated to driving innovation and helping you
          make data-driven decisions that propel your business forward.
        </p>

        <div className="mx-auto mt-12 max-w-360 px-4">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />
          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <IconItem
                key={i}
                item={item}
                isLast={i === topItems.length - 1}
              />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />
          {/* Bottom Features Grid - 3 items */}
          <div className="relative container grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <IconItem
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container mx-auto max-w-360 scale-x-110"
        />
      </div>
    </section>
  );
};

interface IconItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  isLast?: boolean;
  className?: string;
}

const IconItem = ({ item, isLast, className }: IconItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline text-lg font-semibold md:text-xl">
          {item.title}{" "}
        </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
