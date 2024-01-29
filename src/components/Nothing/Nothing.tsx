import LoadingGif from "../../assets/LoadingGif.gif";

function Nothing() {
  return (
    <section className="section notfound" aria-label="notfound" id="notfound">
      <div className="container mt-5 text-center">
        <div className="bg-404">
          <div className="bg-404-text">
            <h1>200</h1>
            <h6>Nothing</h6>
          </div>
        </div>
        <img
          className="img-fluid my-3"
          src={LoadingGif}
          alt=""
          style={{ borderRadius: "8px" }}
        />
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          There is no data available to display.
        </p>
      </div>
    </section>
  );
}

export default Nothing;
