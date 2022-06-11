import path from 'path';
import fs from 'fs';

const getFixturePath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

export { getFixturePath, readFile };
