import React, { useReducer } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const blogReducer = () => {};
  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `blog post #${blogPosts.length + 1}` },
    ]);
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

//
export default BlogContext;
