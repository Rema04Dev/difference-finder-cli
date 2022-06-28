import yaml from 'js-yaml';

export default (data, ext) => {
  switch (ext) {
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`extension ${ext} is not supported`);
  }
};
