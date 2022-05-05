import colors from "colors";
import _ from "lodash";

const renderTree = (data) => {
  const tree = data.reduce((acc, node) => {
    const { name, value, state, meta, children, type } = node;
    if (type === "nested") {
      acc += `   ${name}: ${value}\n`;
    }
    if (state === "added") {
      acc += ` + ${name}: ${value}\n`.green;
    }
    if (state === "deleted") {
      acc += ` - ${name}: ${value}\n`.red;
    }
    if (state === "changed") {
      acc += ` - ${name}: ${meta.oldValue}\n`.red;
      acc += ` + ${name}: ${value}\n`.green;
    }
    if (state === "unchanged") {
      acc += `   ${name}: ${value}\n`.yellow;
    }
    return acc;
  }, "");
  return tree;
};

export default renderTree;
