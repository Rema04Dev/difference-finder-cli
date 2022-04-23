import yaml from 'js-yaml';

export default (data, format) => {
    let parse;
    if (format === '.json') {
        parse = JSON.parse;
    } else if (format === '.yml' || format === '.yaml') {
        parse = yaml.load;
    }
    return parse(data);
}