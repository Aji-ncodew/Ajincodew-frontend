const initialState = {
  loading: false,
  blogs: [], // Ensure this is initialized as an empty array
  error: null,
};
const blogsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "FETCH_BLOGS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_BLOGS_SUCCESS":
      console.log('Received blogs payload:', action.payload);
      const receivedBlogs = Array.isArray(action.payload) ? action.payload : [];
      return { ...state, loading: false, blogs: receivedBlogs, error: null };      
    case "FETCH_BLOGS_FAILURE":
      return { ...state, loading: false, blogs: [], error: action.payload };
    default:
      return state;
  }
};


export default blogsReducer;
