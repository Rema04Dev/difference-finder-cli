import fs from "fs";
import path from "path";
import parse from "./parsers.js";
import compare from "./compare.js";
import stylish from "./stylish.js";
const parseData = (filepath) => {
  const ext = path.extname(filepath);
  const fullPath = path.resolve(process.cwd(), "__fixtures__", filepath);
  const data = fs.readFileSync(fullPath, "utf-8");
  return parse(data, ext);
};
const gendiff = (filepath1, filepath2, format = "stylish") => {
  const paths = [filepath1, filepath2];
  const data = paths.map(parseData);
  const nodes = compare(data);
  const diff = stylish(nodes);
  return diff;
};

console.log(gendiff("children1.json", "children2.json"));
