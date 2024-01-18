// Session.tsx
import "./Session.css";

function Session({ session }: { session: any }) {
  return (
    <div className="session card text-center text-light mb-3">
      {/* Provide an alt attribute for accessibility */}
      <img
        src={session.image ? session.image : "https://via.placeholder.com/400"}
        className="card-img-top"
        loading="lazy"
        alt={session.title}
      />
      <div className="card-body">
        <div className="type mb-2 mt-1">
          <span className="badge py-2">{session.type}</span>
        </div>
        <h5 className="card-title">{session.title}</h5>
        <div className="card-text">
          By {session.speakers.join(", ")}
        </div>
        <div className="card-text">
          Duration: {session.Duration}
        </div>
      </div>
      <small className="card-subtitle mb-3">{session.academicYear}</small>
      <div className="card-footer">
        <a href={session.link} className="btn btn-sm w-100" download>
          Link
        </a>
      </div>
    </div>
  );
}

export default Session;
