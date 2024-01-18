import BLOG1_image from "../../assets/fast_api.png";

import "./Blogs.css";

/**
 * Blogs Component - A React component that displays our blogs.
 *
 * @component
 * @example
 * // Usage example in another component
 * import About from './Blogs';
 *
 * const App = () => {
 *   return <Blogs />;
 * };
 *
 * @returns {JSX.Element} The rendered component.
 */
function Blogs() {
  const tags=["FastAPI","Microservices","API","Python"]
  const currentDate= new Date().getFullYear();

  return (
    <>
      <section className="section blogs" id="blogs">
        <div className="container">
          <h2 className="text-center mb-5">Blogs</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center">
              <div className="col">
                <div className="card text-light">
                  <img
                    src={BLOG1_image}
                    className="card-img-top"
                    loading="lazy"
                    alt="What is FastApi Framework ?"
                  />
                  <div className="card-body">
                    <div className="tags py-2">
                      {tags.map((tag: any) => (
                        <span className="badge py-2 me-2 mb-1" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h5 className="card-title">What is FastApi Framework ?</h5>
                    <p className="card-text">FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to be easy to use and to provide high performance, making it a popular choice for developers building modern web applications and microservices.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <small>
                      By Achraf TAFFAH on {currentDate}
                    </small>
                    <a href="https://medium.com/@a.taffah/what-is-fastapi-framework-f14b303d2458" className="btn" target="_blank">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
