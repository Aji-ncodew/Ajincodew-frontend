// Courses.tsx
import React, { useEffect, useState } from "react";
import ShimmerSession from "./ShimmerSession";
import Session from "./Session";
import ProblemSolvingEp1 from "../../assets/courses/ProblemSolvingEp1.jpg"
import ProblemSolvingEp2 from "../../assets/courses/ProblemSolvingEp2.jpg"
import LaravelEp1 from "../../assets/courses/LaravelEp1.jpg"
import LaravelEp2 from "../../assets/courses/LaravelEp2.png"

function Courses() {
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState<{
    _id: number;
    image: string;
    type: string;
    title: string;
    speakers: string[];
    Year: string;
    Duration: string;
    link: string;
  }[]>([]);

  const fakeData = [
    {
      _id: 1,
      image: ProblemSolvingEp1,
      type: "Training",
      title: "Ajincodew : Problem solving (bdarija)",
      speakers: ["Achraf TAFFAH"],
      Year: "2023",
      Duration: "6:21 minutes",
      link: "https://www.youtube.com/watch?v=jLT_cKI28aU&t=24s",
    },
    {
      _id: 2,
      image: ProblemSolvingEp2,
      type: "Training",
      title: "Problem Solving bdarija Ep 2",
      speakers: ["Achraf TAFFAH"],
      Year: "2023",
      Duration: "8:41 minutes",
      link: "https://www.youtube.com/watch?v=X32NQ3v8la4&t=16s",
    },
    {
      _id: 2,
      image: LaravelEp1,
      type: "Training",
      title: "Laravel formation PART 1",
      speakers: ["Zakia REGOUG"],
      Year: "2023",
      Duration: "4:15 minutes",
      link: "https://www.youtube.com/watch?v=QSgOcXb-GZs&t=188s",
    },
    {
      _id: 2,
      image: LaravelEp2,
      type: "Training",
      title: "Laravel formation PART 2",
      speakers: ["Zakia REGOUG"],
      Year: "2023",
      Duration: "41:36 minutes",
      link: "https://www.youtube.com/watch?v=X32NQ3v8la4&t=16s",
    }
  ]

  // Simulate fetching data
  useEffect(() => {
    setSessions(fakeData);
    setLoading(false);
  }, []);

  return (
    <>
      <section className="section data" aria-label="data" id="data">
        <div className="container">
          <div className="title-wrapper mb-4">
            <h2 className="headline-md section-title text-center" id="collection-label">
              Courses
            </h2>
          </div>
          {loading ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center">
              {[...Array(8)].map((_, index) => (
                <div className="col" key={index}>
                  <ShimmerSession />
                </div>
              ))}
            </div>
          ) : sessions.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center">
              {sessions.map((session) => (
                <div className="col" key={session._id}>
                  <Session session={session} />
                </div>
              ))}
            </div>
          ) : (
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
