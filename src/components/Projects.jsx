import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import prince from "../assets/prince.png";
import rouge from "../assets/rouge.png";
import harris from "../assets/harris.png";
import mafey from "../assets/mafey.png";
import observetory from "../assets/observetory.png";

export default function Projects() {
  const projects = [
    {
      title: "PRINCE PARQUE",
      location: "Richmond Hill",
      image: prince,
    },
    {
      title: "ROUGE VIEW",
      location: "Unionville, Markham",
      image: rouge,
    },
    {
      title: "HARRIS GATE",
      location: "Richmond Hill",
      image: harris,
    },
    {
      title: "MAFEY GLEN",
      location: "Richmond Hill",
      image: mafey,
    },
    {
      title: "Observatory Lane",
      location: "Richmond Hill",
      image: observetory,
    },
  ];

  const visibleCards = 4;

  const loopedProjects = [
    ...projects.slice(-visibleCards),
    ...projects,
    ...projects.slice(0, visibleCards),
  ];

  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex === projects.length + visibleCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleCards);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(projects.length);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, projects.length, visibleCards]);

  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  return (
    <section id="projects" className="bg-white px-6 py-24 md:px-10">
      <h2 className="mb-14 text-center text-3xl tracking-wide text-[#c77a2c] md:text-4xl">
        LATEST PROJECTS
      </h2>

      <div className="relative  w-full">
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 md:left-7.5 md:h-20 md:w-20"
        >
          <ChevronLeft size={38} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 md:right-7.5 md:h-20 md:w-20"
        >
          <ChevronRight size={38} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
              transition: isTransitioning
                ? "transform 500ms ease-in-out"
                : "none",
            }}
          >
            {loopedProjects.map((project, index) => (
              <div key={index} className="w-1/4 shrink-0 px-3">
                <div className="group relative overflow-hidden h-150 rounded-[28px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-125 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-6 right-6 text-white transition-all duration-300 group-hover:bottom-12">
                    
                      <h3 className="text-2xl tracking-wide">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-[#c77a2c]">{project.location}</p>

                    <button className="mt-5 translate-y-4 rounded-xl border-2 border-[#c77a2c] px-40 py-2 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#c77a2c]">
                      See Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
