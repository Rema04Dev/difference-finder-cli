import fs from "fs";
import path from "path";
import compare from "./compare.js";
import parse from "./parsers.js";
import renderTree from "../renderTree.js";

const parseData = (filepath) => {
  const ext = path.extname(filepath);
  const fullPath = path.resolve(process.cwd(), "__fixtures__", filepath);
  const data = fs.readFileSync(fullPath, "utf-8");
  const object = parse(data, ext);
  return object;
};

const gendiff = (...filepaths) => {
  const data = filepaths.map(parseData);
  const diff = compare(data);
  const tree = renderTree(diff);
  return tree;
};

export default gendiff;
