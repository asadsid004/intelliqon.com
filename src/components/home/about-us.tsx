export const AboutUs = () => {
  return (
    <div className="mx-auto mt-10 max-w-360 px-4 md:p-6">
      <h2 className="text-center text-4xl font-semibold">
        Innovation That Delivers Real Business Impact
      </h2>
      <div className="mt-12 flex flex-col justify-evenly gap-6 sm:flex-row">
        <div className="flex flex-col items-center">
          <div className="text-primary flex items-center gap-1">
            <span className="text-6xl leading-none font-semibold tracking-tighter">
              40
            </span>
            <span className="text-5xl font-medium">+</span>
          </div>
          <span className="text-muted-foreground mt-4 text-xl font-medium">
            Total Projects Completed
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-primary flex items-center gap-1">
            <span className="text-6xl leading-none font-semibold tracking-tighter">
              6
            </span>
            <span className="text-5xl font-medium">+</span>
          </div>
          <span className="text-muted-foreground mt-4 text-xl font-medium">
            Services
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-primary flex items-center gap-1">
            <span className="text-6xl leading-none font-semibold tracking-tighter">
              100
            </span>
            <span className="text-5xl font-medium">%</span>
          </div>
          <span className="text-muted-foreground mt-4 text-xl font-medium">
            Satisfaction Rate
          </span>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <p className="text-muted-foreground text-center text-lg leading-relaxed">
          Intelliqon brings deep expertise in{" "}
          <span className="text-primary font-semibold">AI</span>,{" "}
          <span className="text-primary font-semibold">machine learning</span>,{" "}
          <span className="text-primary font-semibold">cybersecurity</span>,{" "}
          <span className="text-primary font-semibold">
            chatbot development
          </span>
          , <span className="text-primary font-semibold">data analysis</span>,{" "}
          and{" "}
          <span className="text-primary font-semibold">
            robotic process automation
          </span>{" "}
          to help businesses optimize operations and unlock new value.
        </p>
      </div>
    </div>
  );
};
