"use client";
import CourseCard from "@/components/sub/CourseCard";
import React, { useState, useEffect } from "react";

interface Course {
  src: string;
  title: string;
  description: string;
  link: string
}


const initialCourses: Course[] | null = 
[
  {
    src: "/backend roadmap.svg",
    title: "Backend developer roadmap - Bdarija",
    description: "Backend developer roadmap - Bdarija By Achraf TAFFAH",
    link: "https://www.youtube.com/watch?v=PR3le-m_HL0&t=36s"
  },
  {
    src: "/digital banking project.svg",
    title: "Digital Banking Project (Spring boot, Angular) - En francais",
    description: "Digital Banking Project (Spring boot, Angular) - En francais By Achraf TAFFAH",
    link: "https://www.youtube.com/watch?v=dKdhWgTAstA&t=5s"
  },
  {
    src: "/drupal project.svg",
    title: "Projet CMS DRUPAL - En français",
    description: "Projet CMS DRUPAL - En français By Achraf TAFFAH",
    link: "https://www.youtube.com/watch?v=DuMX5UOq6VY&t=6s"
  },
  {
    src: "/laravel 1.svg",
    title: "Laravel From Scratch [Part 1] - Bdarija",
    description: "Laravel From Scratch [Part 1] - Bdarija By Zakia Regoug",
    link: "https://www.youtube.com/watch?v=QSgOcXb-GZs&t=54s"
  },
  {
    src: "/laravel 2.svg",
    title: `Laravel From Scratch [Part 2] - Bdarija`,
    description: "Laravel From Scratch [Part 2] - Bdarija By Zakia Regoug",
    link: "https://www.youtube.com/watch?v=9r-JhfvHDMA&t=9s"
  },
  {
    src: "/problem solving 1.svg",
    title: "Problem solving [Part 1] - Bdarija",
    description: "Problem solving [Part 1] - Bdarija By Achraf TAFFAH",
    link: "https://www.youtube.com/watch?v=jLT_cKI28aU&t=59s"
  },
  {
    src: "/problem solving 2.svg",
    title: "Problem solving [Part 2] - Bdarija",
    description: "Problem solving [Part 2] - Bdarija By Achraf TAFFAH",
    link: "https://www.youtube.com/watch?v=X32NQ3v8la4&t=32s"
  }
];

export default function Courses({ params }: { params: any }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const CoursesPerPage = 6; // 10 items per page

  useEffect(() => {
    const fullUrl = window.location.href;
    const lastSegment = fullUrl.substring(fullUrl.lastIndexOf("/") + 1);
    console.log(lastSegment);
  }, []);

  const filteredCourses = (initialCourses ?? []).filter(
    (Course) =>
      Course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  // Pagination logic
  const indexOfLastCourse = currentPage * CoursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - CoursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Courses"
      style={{ userSelect: "text" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Courses
      </h1>

      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search Courses..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full px-10">
        {currentCourses.length > 0 ? (
          currentCourses.map((Course, index) => (
            <a href={Course.link}>
              <CourseCard
              key={index}
              src={Course.src}
              title={Course.title}
              description={Course.description}
              />
            </a>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-2">No courses found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex space-x-2 mt-8">
        {Array.from(
          { length: Math.ceil(filteredCourses.length / CoursesPerPage) },
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
