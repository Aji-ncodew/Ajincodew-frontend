"use client"
import ProjectCard from "@/components/sub/ProjectCard";
import React, { useState } from "react";
import { useEffect } from "react";

 

const initialProjects = [
  {
    src: "/next.jpg",
    title: "Modern Next.js Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "/CardImage.png",
    title: "Interactive Website Cards",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "/SpaceWebsite.png",
    title: "Space Themed Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function Projects  ({params} : {params : any}) {
  useEffect(() => {
    // Get the full URL
    const fullUrl = window.location.href;

    // Extract the last segment after the final '/'
    const lastSegment = fullUrl.substring(fullUrl.lastIndexOf('/') + 1);

    // Log the last segment
    console.log(lastSegment);
  }, []); 
  
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = initialProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
            />
          ))
        ) : (
          <p className="text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  );
};
