import AJINCODEW_teaser from "../../assets/AJINCODEW_teaser.gif";

function NotFound() {
  return (
    <section className="section notfound" aria-label="notfound" id="notfound">
      <div className="container mt-5 text-center">
        <div className="bg-404">
          <div className="bg-404-text">
            <h1>404</h1>
            <h6>PAGE NOT FOUND</h6>
          </div>
        </div>
        <img
          className="img-fluid my-3"
          src={AJINCODEW_teaser}
          alt=""
          style={{ borderRadius: "8px" }}
        />
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
