import yaml from 'js-yaml';

export default (data, ext) => {
  let parse;
  switch (ext) {
    case '.json':
      parse = JSON.parse;
      break;
    case '.yaml':
      parse =  yaml.load;
      break;
    case '.yml':
      parse =  yaml.load;
      break;
  }
  return parse(data);
};
