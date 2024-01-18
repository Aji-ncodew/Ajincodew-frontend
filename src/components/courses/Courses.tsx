import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ShimmerSession from './ShimmerSession';
import Course from './Course';
import CoursesData from '../../data/CoursesData';
import CourseEntity from '../../entities/Course';
import Filter from '../shared/filter/Filter';
import "./Courses.css"

function Courses() {
  const itemsPerPage = 6;
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<CourseEntity[]>([]);
  const [filter, setFilter] = useState<CourseEntity[]>([]);
  const [searchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Simulate fetching data
  useEffect(() => {
    setCourses(CoursesData);
    setLoading(false);
  }, []);

  // Filter courses based on the search term
  useEffect(() => {
    const filteredCourses = courses.filter((course) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        course.title.toLowerCase().includes(searchLower) ||
        course.type.toLowerCase().includes(searchLower) ||
        course.speakers.some((speaker) => speaker.toLowerCase().includes(searchLower)) ||
        course.Duration.toLowerCase().includes(searchLower) ||
        course.Year.toLowerCase().includes(searchLower)
      );
    });
    setFilter(filteredCourses);
    setCurrentPage(1); // Reset current page when filtering
  }, [searchTerm, courses]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filter.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the courses for the current page
  const currentCourses = filter.slice(startIndex, endIndex);

  // Handle page change
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <>
      <section className="section data" aria-label="data" id="data">
        <div className="container">
          <div className="title-wrapper mb-4">
            <h2 className="headline-md section-title text-center" id="collection-label">
              Courses
            </h2>
          </div>

          {/* Search bar */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Filter data={courses} setter={setFilter} />
            </div>
          </div>

          {loading ? (
            // Display a loading indicator or shimmer effect while data is being fetched
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center">
              {[...Array(8)].map((_, index) => (
                <div className="col" key={index}>
                  <ShimmerSession />
                </div>
              ))}
            </div>
          ) : filter.length > 0 ? (
            // Display filtered sessions
            <>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center">
                {currentCourses.map((course) => (
                  <div className="col" key={course._id}>
                    <Course course={course} />
                  </div>
                ))}
              </div>
              <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName="pagination justify-content-center"
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
              />
            </>
          ) : (
            // Display a message when no results are found
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="alert alert-secondary" role="alert">
                  No results found!
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Courses;
