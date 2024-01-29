// Import statements
import axios from 'axios';
import config from '../../../Config'; 
import BlogEntity from '../../entities/Blog';
import { Dispatch } from 'redux'; 

// Action types
const FETCH_BLOGS_REQUEST = 'FETCH_BLOGS_REQUEST';
const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';

// Action creators
const fetchBlogsRequest = () => ({
    type: FETCH_BLOGS_REQUEST,
});

const fetchBlogsSuccess = (blogs: BlogEntity[]) => ({
    type: FETCH_BLOGS_SUCCESS,
    payload: blogs,
});


const fetchBlogsFailure = (error: string) => ({
    type: FETCH_BLOGS_FAILURE,
    payload: error,
});

// Async action creator
export const fetchBlogs = () => {
    return (dispatch: Dispatch) => {
      dispatch(fetchBlogsRequest());
      axios
        .get(`${config.productionApiURI}/blogs`)
        .then((response) => {
          const blogsData = response.data; // Update here to match the server-side structure
          dispatch(fetchBlogsSuccess(blogsData));
          console.info("Successfully fetched blogs");
          console.log(blogsData);
        })
        .catch((error) => {
          console.warn('API Error:', error);
          dispatch(fetchBlogsFailure(error.message));
        });
    };
  };