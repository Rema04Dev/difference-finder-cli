import _ from "lodash";

const symbols = {
  unchanged: " ",
  added: "+",
  removed: "-",
  nested: " ",
};

const indent = 4;
const setIndent = (depth, spaces = 2) => " ".repeat(depth * indent - spaces);

const stringify = (value, depth) => {
  if (!_.isObject(value)) return value;
  return `{\n${Object.entries(value)
    .map(
      ([key, val]) =>
        `${setIndent(depth)}  ${key}: ${stringify(val, depth + 1)}`
    )
    .join("\n")}\n${setIndent(depth - 1)}  }`;
};

const renderAst = (node, depth) => {
  switch (node.type) {
    case "added":
    case "removed":
    case "unchanged":
      return `${setIndent(depth)}${symbols[node.type]} ${node.key}: ${stringify(
        node.value,
        depth + 1
      )}`;
    case "updated":
      return `${setIndent(depth)}${symbols.removed} ${node.key}: ${stringify(
        node.meta.oldValue,
        depth + 1
      )}\n${setIndent(depth)}${symbols.added} ${node.key}: ${stringify(
        node.value,
        depth + 1
      )}`;
    case "nested":
      return `${setIndent(depth)}${symbols[node.type]} ${
        node.key
      }: {\n${node.children
        .map((node) => renderAst(node, depth + 1))
        .join("\n")}\n  ${setIndent(depth)}}`;
    default:
      throw new Error("Unknown state!");
  }
};

export default (astDifference) =>
  `{\n${astDifference.map((elem) => renderAst(elem, 1)).join("\n")}\n}`;
