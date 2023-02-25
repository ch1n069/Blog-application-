import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `` }]);
  };
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

//
export default BlogContext;
