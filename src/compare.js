import _ from "lodash";

const mknode = (name, value, state, meta = {}) => ({
  name,
  value,
  state,
  meta,
});
const mkNest = (name, children) => ({ name, children, type: "nest" });
const compareObjects = (objects) => {
  const [obj1, obj2] = objects;
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const nodes = keys.map((key) => {
    const [value1, value2] = [obj1[key], obj2[key]];
    if (_.isObject(value1) && _.isObject(value2)) {
      return mkNest(key);
    }
    if (!_.has(obj1, key)) {
      return mknode(key, value2, "added");
    }
    if (!_.has(obj2, key)) {
      return mknode(key, value1, "deleted");
    }
    if (obj1[key] !== obj2[key]) {
      return mknode(key, value2, "changed", { oldValue: value1 });
    }
    return mknode(key, value1, "unchanged");
  });
  return nodes;
};

export default compareObjects;
