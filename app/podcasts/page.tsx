"use client"

import React, { useState, useEffect } from "react";
import PodcastCard from "@/components/sub/PodcastCard";

interface Project {
  videoUrl: string;
  title: string;
  description: string;
  totalCarsNumber: number;
}

const initialProjects: Project[] = [
  {
    videoUrl: "https://www.youtube.com/embed/QgFZJ0FXiqw",
    title: "Podcast Episode 1",
    description: "This is a description for a sample podcast episode.",
    totalCarsNumber: 0
  },
  {
    videoUrl: "https://www.youtube.com/embed/yi_k8Z-oFIc",
    title: "Podcast Episode 2",
    description: "This is a description for another podcast episode.",
    totalCarsNumber: 0
  },
  // Add more projects here as needed
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  useEffect(() => {
    const fullUrl = window.location.href;
    const lastSegment = fullUrl.substring(fullUrl.lastIndexOf("/") + 1);
    console.log(lastSegment);
  }, []);

  const filteredProjects = (initialProjects ?? []).filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Determine the container style based on the number of projects
  const containerStyle = currentProjects.length === 1
    ? "flex justify-center"
    : "grid gap-10 w-full px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2";

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
      style={{ userSelect: "text" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Podcasts
      </h1>

      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search podcasts..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div
        className={`${
          currentProjects.length === 1 ? "flex justify-center" : "grid"
        } ${containerStyle}`}
        style={{ width: currentProjects.length === 1 ? '80%' : '100%' }} // Set container width based on number of results
      >
        {currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <PodcastCard
              key={index}
              videoUrl={project.videoUrl}
              title={project.title}
              description={project.description}
              totalCarsNumber={currentProjects.length} // Pass the length for consistent card behavior
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-1">No podcasts found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex space-x-2 mt-8">
        {Array.from(
          { length: Math.ceil(filteredProjects.length / projectsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-purple-500 text-white"
                  : "bg-white text-purple-500"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
