import stylish from "./stylish.js";
// import plain from "./plain.js";

const getRenderFormat = (tree, format = "stylish") => {
  switch (format) {
    case "stylish":
      return stylish(tree);
    case "plain":
      return plain(tree);
  }
};

export default getRenderFormat;
