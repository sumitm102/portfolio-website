import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "React Native", level: 75, category: "frontend" },

  // Backend
  { name: "Python", level: 90, category: "backend" },
  // { name: "FastAPI", level: 80, category: "backend" },
  { name: "Flask", level: 75, category: "backend" },
  // { name: "Java", level: 75, category: "backend" },
  // { name: "Spring Boot", level: 65, category: "backend" },
  { name: "Supabase", level: 75, category: "backend" },
  { name: "SQL", level: 70, category: "backend" },
  { name: "SQLite", level: 65, category: "backend" },

  // Game Development
  { name: "Unity", level: 95, category: "game development" },
  { name: "C#", level: 85, category: "game development" },
  { name: "Ren'Py", level: 85, category: "game development" },

  // Embedded Software
  { name: "C++", level: 80, category: "embedded software" },
  { name: "ESP32", level: 75, category: "embedded software" },
  { name: "Arduino", level: 70, category: "embedded software" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Visual Studio", level: 95, category: "tools" },
  { name: "PyCharm", level: 85, category: "tools" },
  { name: "IntelliJ IDEA", level: 80, category: "tools" },
  { name: "Arduino IDE", level: 85, category: "tools" },
  { name: "Eclipse", level: 75, category: "tools" },
  { name: "SquareLine Studio", level: 80, category: "tools" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "game development",
  "embedded software",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || activeCategory === skill.category
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My
          <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 ">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
