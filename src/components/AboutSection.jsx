import { Briefcase, Code, Gamepad2, MonitorCog, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & Lifelong Learner
            </h3>
            <p className="text-muted-foreground">
              With hands-on experience across web development, embedded systems,
              and game design, I build clean, responsive, and high-performance
              applications using modern tools and frameworks.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems and leveraging essetial tools. I strive to learn
              efficient techniques to stay at the forefront of the ever-evolving
              tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="https://docs.google.com/document/d/1DZufXLhJnt8-S_V6MLwqU-GZ_aXzJUUJSbbLLz1fmss/edit?usp=drive_link"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Game Development</h4>
                  <p className="text-muted-foreground">
                    Developing immersive narratives and designing robust
                    gameplay mechanics.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MonitorCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Embedded Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Architecting the brain of next-gen hardware with relevant
                    tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
