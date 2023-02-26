import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  // state === blogposts
  //   action === addblogpost
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: `blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  //

  return (
    <BlogContext.Provider value={{ data: blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

//
export default BlogContext;
