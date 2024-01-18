// Course.tsx
import "./Course.css";

function Course({ course }: { course: any }) {
  return (
    <div className="course card text-center text-light mb-3">
      {/* Provide an alt attribute for accessibility */}
      <img
        src={course.image ? course.image : "https://via.placeholder.com/400"}
        className="card-img-top"
        loading="lazy"
        alt={course.title}
      />
      <div className="card-body">
        <div className="type mb-2 mt-1">
          <span className="badge py-2">{course.type}</span>
        </div>
        <h5 className="card-title">{course.title}</h5>
        <div className="card-text">
          By {course.speakers.join(", ")}
        </div>
        <div className="card-text">
          Duration: {course.Duration}
        </div>
      </div>
      <small className="card-subtitle mb-3">{course.academicYear}</small>
      <div className="card-footer">
        <a href={course.link} className="btn btn-sm w-100" download>
          Link
        </a>
      </div>
    </div>
  );
}

export default Course;
