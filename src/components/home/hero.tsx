import Link from "next/link";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative mx-auto max-w-360 overflow-hidden py-6 sm:py-10">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[200px] w-[400px] -translate-x-2/3 -translate-y-1/2 rounded-full bg-teal-300/10 blur-[80px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[200px] w-[400px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[80px] sm:top-1/2" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 -z-10 h-[200px] w-[400px] translate-x-3/5 -translate-y-1/2 rounded-full bg-teal-300/20 blur-[80px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/2 -z-10 h-[200px] w-[400px] -translate-x-2/5 -translate-y-2/3 rounded-full bg-blue-500/20 blur-[80px] sm:top-1/2" />

      <div className="relative z-10 p-4 pt-8 text-center md:px-6">
        <h1 className="text-5xl leading-relaxed tracking-tight md:text-6xl">
          Empowering Growth through <br />{" "}
          <span className="text-primary text-6xl font-semibold md:text-7xl">
            Expert Consulting
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-lg text-lg">
          We partner with you to unlock your business potential with
          cutting-edge technology and strategic insights.
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <Button asChild className="px-4 py-6 text-lg">
          <Link href="/services">Explore solutions</Link>
        </Button>
        <Button asChild className="px-4 py-6 text-lg" variant="outline">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </section>
  );
};
