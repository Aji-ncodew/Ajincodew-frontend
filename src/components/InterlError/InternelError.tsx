import InternelErrorGif from "../../assets/InternelErrorGif.gif";

function InternelError() {
  return (
    <section className="section notfound" aria-label="notfound" id="notfound">
      <div className="container mt-5 text-center">
        <div className="bg-404">
          <div className="bg-404-text">
            <h1>500</h1>
            <h6>Internel Error</h6>
          </div>
        </div>
        <img
          className="img-fluid my-3"
          src={InternelErrorGif}
          alt=""
          style={{ borderRadius: "8px" }}
        />
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          There is an internal error on the server side.
        </p>
      </div>
    </section>
  );
}

export default InternelError;
