import "./About.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function About() {
  return (
    <>
      <section className="section about" aria-label="about" id="about">
        <div className="container">
          <h2 className="text-center">About Us</h2>
          <p
            style={{ textAlign: "justify", fontSize: "15pt" }}
            className="px-5 py-3"
          >
            We are a Moroccan organization with the mission to empower young Moroccans by providing them with the knowledge and skills needed to excel in programming and information technology. Our commitment is to foster a vibrant tech ecosystem in Morocco and equip our youth with the tools to shape a brighter digital future.
          </p>
          <h2 className="text-center">Q&A</h2>
          <div className="container p-3 d-flex justify-content-center">
            <div className="accordion" id="qna">
              <div className="accordion-item mb-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#qnaOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is our motivation ?
                  </button>
                </h2>
                <div
                  id="qnaOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#qna"
                >
                  <div className="accordion-body">
                    We want to spread the IT culture through our campus and
                    create a safe and motivating environment for IT enthusiasts.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-1">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#qnaTwo"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Where do we work?
                  </button>
                </h2>
                <div
                  id="qnaTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#qna"
                >
                  <div className="accordion-body">
                    Everywhere.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#qnaThree"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can you help us?
                  </button>
                </h2>
                <div
                  id="qnaThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#qna"
                >
                  <div className="accordion-body">
                    You can sponsor an event or suggest a formation in a topic
                    of your choice related to IT.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
