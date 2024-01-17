// import Slider from "react-slick";
import "./Projects.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const projects = [
//   {
//     name: "Project 1",
//     description: "This is the first project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
//   {
//     name: "Project 2",
//     description: "This is the second project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
//   {
//     name: "Project 3",
//     description: "This is the third project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
//   {
//     name: "Project 4",
//     description: "This is the fourth project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
//   {
//     name: "Project 5",
//     description: "This is the fifth project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
//   {
//     name: "Project 6",
//     description: "This is the sixth project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
//   {
//     name: "Project 7",
//     description: "This is the seventh project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
//   {
//     name: "Project 8",
//     description: "This is the eighth project",
//     github: "https://github.com",
//     technologies: ["Python", "React"],
//   },
// ];

function Projects() {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <section
        className="section projects"
        id="projects"
      >
        <div className="container">
          <div className="title-wrapper mb-4">
            <h2
              className="section-title text-center"
            >
              Projects
            </h2>
          </div>
          <div className="row">
            {/* <Slider {...settings}>
              {projects.map((project) => (
                <div className="card text-center text-light">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.github} className="btn">
                      Link to project <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                  <div className="card-footer">
                    {project.technologies.map((technology) => (
                      <div className="badge">{technology}</div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
