"use client";
import CourseCard from "@/components/sub/CourseCard";
import React, { useState, useEffect } from "react";

interface Course {
  src: string;
  title: string;
  description: string;
}


const initialCourses: Course[] | null = []
// [
//   {
//     src: "/next.jpg",
//     title: "Modern Next.js Portfolio",
//     description: "A modern portfolio built with Next.js.",
//   },
//   {
//     src: "/next.jpg",
//     title: "Interactive Website Cards",
//     description: "Interactive cards for a website using CSS and JavaScript.",
//   },
//   {
//     src: "/next.jpg",
//     title: "Space Themed Website",
//     description: "A space-themed website designed with CSS animations.",
//   },
//   // Add more Courses here to ensure you have at least 10 items
// ];

export default function Courses({ params }: { params: any }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const CoursesPerPage = 10; // 10 items per page

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full px-10">
        {currentCourses.length > 0 ? (
          currentCourses.map((Course, index) => (
            <CourseCard
              key={index}
              src={Course.src}
              title={Course.title}
              description={Course.description}
            />
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
