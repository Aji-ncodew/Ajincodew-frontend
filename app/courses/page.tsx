"use client";

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
    videoUrl: "https://www.youtube.com/embed/jLT_cKI28aU?si=RD7FN8p0e3KCsxni",
    title: "Problem solving [Part 1] - Bdarija حل المشكلات [الجزء الأول] - بالدارجة المغربية",
    description: "444 vues le 19 oct 2022",
    totalCarsNumber: 0
  },
  {
    videoUrl: "https://www.youtube.com/embed/PR3le-m_HL0?si=VT9g7XxZ1Zae-s0j",
    title: "Backend developer roadmap - Bdarija خريطة تعلم تطويرالواجهة الخلفية - بالدارجة المغربية",
    description: "168 vues le 6 févr 2023",
    totalCarsNumber: 0
  },
  {
    videoUrl: "https://www.youtube.com/embed/X32NQ3v8la4?si=eRR4y7oU2qu2UI7a",
    title: "Problem solving [Part 2] - Bdarija حل المشكلات [الجزء الثاني] - بالدارجة المغربية",
    description: "239 vues il ya 11 mois",
    totalCarsNumber: 0
  },
  {
    videoUrl: "https://www.youtube.com/embed/QSgOcXb-GZs?si=ClLa-W2xHVPPo0Zc",
    title: "Laravel From Scratch [Part 1] - Bdarija لارافيل من الصفر [الجزء الأول] - بالدارجة المغربية",
    description: "379 vues le 5 oct 2023",
    totalCarsNumber: 0
  },
  {
    videoUrl: "https://www.youtube.com/embed/9r-JhfvHDMA?si=8Jjt1oqL9eIr1u3V",
    title: "Laravel From Scratch [Part 2] - Bdarija لارافيل من الصفر [الجزء الثاني] - بالدارجة المغربية",
    description: "311 vues le 22 nov 2023",
    totalCarsNumber: 0
  }
];

export default function Projects() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check for mobile view based on screen width
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // You can adjust this value to suit your needs
    };

    // Set initial value and add resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const containerStyle =
    currentProjects.length === 1
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
          currentProjects.length === 1 ? "flex justify-center text-align-center" : "grid"
        } ${containerStyle}`}
        style={{ width: currentProjects.length === 1 ? "80%" : "80%" }} 
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
          <div
            className="flex items-center justify-center w-full h-48"
            style={{ marginLeft: !isMobileView ? "50%" : "0" }}
          >
            <p className="text-gray-500 text-center">No podcasts found.</p>
          </div>
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