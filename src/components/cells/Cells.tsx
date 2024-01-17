import visual_data from "../../assets/illustrations/visual_data.png";
import chat_bot from "../../assets/illustrations/chat_bot.png";
import server_cluster from "../../assets/illustrations/server_cluster.png";
import business_deal from "../../assets/illustrations/business_deal.png";
import conference from "../../assets/illustrations/conference.png";
import social_media from "../../assets/illustrations/social_media.png";
import designer from "../../assets/illustrations/designer.png";
import "./Cells.css";

const cells = [
  {
    id: 1,
    name: "Data",
    icon: "bi bi-bar-chart-line",
    description:
      "Our aim is to make you assimilate the basics of data science, data analytics through training projects and courses.",
    image: visual_data,
  },
  {
    id: 2,
    name: "Training",
    icon: "bi bi-laptop",
    description:
      "Our goal is to enhance your skills and knowledge in the field of artificial intelligence with a 'Learning-by-Doing' approach.",
    image: chat_bot,
  },
  {
    id: 3,
    name: "Bloging",
    icon: "bi bi-infinity",
    description:
      "Sharing compelling content on AJINCODEW's vibrant and dynamic social media platforms, fostering connections and amplifying your message across diverse online communities.",
    image: server_cluster,
  },
  {
    id: 4,
    name: "Sponsoring",
    icon: "bi bi-suit-heart",
    description:
      "We take care of contacting the companies to guarantee the necessary resources to maintain the success of the events and activities.",
    image: business_deal,
  },
  {
    id: 5,
    name: "Events",
    icon: "bi bi-calendar-event",
    description:
      "Your creative idea can be realized in the events cell which oversees the realization of events (hackathons, competitions ...) in their entirety.",
    image: conference,
  },
  {
    id: 6,
    name: "Media",
    icon: "bi bi-camera",
    description:
      "Our mission is to manage the social networks. This mainly involves covering the various events, ensuring that each event gets the media coverage it deserves.",
    image: social_media,
  },
  {
    id: 7,
    name: "Design",
    icon: "bi bi-palette",
    description:
      "Takes care of the creation of all the posters and videos that you see in our social networks, so it will allow you to express your hidden artistic sense.",
    image: designer,
  },
];

function Cells() {
  return (
    <>
      <section className="section cells">
        <div className="container">
          <h2 className="text-center">Our Cells</h2>
          <div className="pills d-flex align-items-center px-lg-5 py-4 ">
            <div
              className="nav nav-pills nav-fill nav-justified flex-column gap-1 gap-lg-2 gap-md-2 me-2 me-lg-3 me-md-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {cells.map((cell, index) => (
                <button
                key={cell.id}
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`v-pills-${cell.name.toLowerCase()}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#v-pills-${cell.name.toLowerCase()}`}
                type="button"
                role="tab"
                aria-controls={`v-pills-${cell.name.toLowerCase()}`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                <i className={cell.icon}></i> {cell.name}
              </button>
              ))}
            </div>
            <div className="tab-content p-3" id="v-pills-tabContent">
              {cells.map((cell, index) =>
                <div
                key={cell.id}
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`v-pills-${cell.name.toLowerCase()}`}
                role="tabpanel"
                aria-labelledby={`v-pills-${cell.name.toLowerCase()}-tab`}
              >
                <div className="bg-icon">
                  <i className={cell.icon}></i>
                </div>
                <h3>{cell.name} Cell</h3>
                <p>{cell.description}</p>
                <img
                  className="img-fluid rounded"
                  src={cell.image}
                  alt=""
                />
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cells;
