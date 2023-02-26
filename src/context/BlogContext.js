import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

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
const addBlogPost = () => {
  dispatchEvent({ type: "add_blogPost" });
};

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//

//   return (
//     <BlogContext.Provider value={{ data: blogPosts }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

//
// export default BlogContext;
export const { context, provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
  },
  []
);
