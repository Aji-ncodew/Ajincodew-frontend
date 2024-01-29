// Blog.tsx

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../redux/actions/blogAction';
import Loading from '../Loading/Loading';
import InternelError from '../InterlError/InternelError';
import Nothing from '../Nothing/Nothing';

interface BlogProps {
  loading: boolean;
  blogs: {
    _id: string;
    updateDate: string;
    author: string;
    publishDate: Date;
    description: string;
    title: string;
  }[];
  error: string | null;
  fetchBlogs: () => void;
}

const Blog: React.FC<BlogProps> = ({ loading, blogs, error, fetchBlogs }) => {
  useEffect(() => {
    // Fetch blogs when the component mounts
    fetchBlogs();
  }, [fetchBlogs]);

  if (loading || !blogs) {
    return (
      <Loading />
    );
  }

  // Move the closing brace here

  if (error) {
    return (
      <InternelError />
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <Nothing />
    );
  }

  return (
    <section className="section blogs" id="blogs">
    <div className="container">
      <h2 className="text-center mb-5">Blogs</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center">
        {blogs.map(blog => (
          <div className="col" key={blog._id}>
            <div className="card text-dark">
              {/* <img
                src={ }
                className="card-img-top"
                loading="lazy"
                alt={blog.title}
              /> */}
              <div className="card-body">
                {/* <div className="tags py-2">
                  {blog.tags.map((tag: string) => (
                    <span className="badge py-2 me-2 mb-1" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div> */}
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small>
                  By {blog.author} on {/*blog.publishDate*/}
                </small>
                {/* <a href={blog.externalLink} className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right"></i>
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.blogReducer.loading,
    blogs: state.blogReducer.blogs || [], // Handle undefined or null case
    error: state.blogReducer.error,
  };
};

export default connect(mapStateToProps, { fetchBlogs })(Blog);
