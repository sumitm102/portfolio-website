import {
  ArrowRight,
  ExternalLink,
  GitCommitVertical,
  Github,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cardless & PIN-Free Payment Service",
    description:
      "A responsive Next.js frontend for a facial recognition payment platform.",
    image: "/projects/CardlessPayment.png",
    tags: ["Next.js", "TailWindCSS", "Flask"],
    demoUrl: "https://devpost.com/software/invis-io",
    githubUrl: "https://github.com/sumitm102/Hack-Knight-Spring-2025",
  },
  {
    id: 2,
    title: "Action RPG",
    description:
      "A dynamic 2D action RPG with elemental combat and flexible stat systems for engaging gameplay.",
    image: "/projects/2D_RPG.png",
    tags: ["Unity", "C#", "ScriptableObject"],
    demoUrl: "#",
    githubUrl: "https://github.com/sumitm102/First_RPG",
  },
  {
    id: 3,
    title: "Garbage Detection and Reporting App",
    description:
      "Full-featured mobile app for urban cleanliness and community waste reporting.",
    image: "/projects/Ecofriendly.png",
    tags: ["React Native", "Nativewind", "Gemini"],
    demoUrl: "https://devpost.com/software/ecofriend-ly",
    githubUrl: "https://github.com/sumitm102/Hack-Knight-2024-Hackathon",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project showcases attention
          to detail, performance optimization, and exceptional user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    {project.demoUrl != "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary trasnition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary trasnition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <a
            href="https://github.com/sumitm102"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
