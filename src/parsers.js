import yaml from 'js-yaml';

export default (data, ext) => {
  let parse;
  if (ext === '.json') {
    parse = JSON.parse;
  } else if (ext === '.yaml' || ext === '.yml') {
    parse = yaml.load;
  }
  return parse(data);
};
