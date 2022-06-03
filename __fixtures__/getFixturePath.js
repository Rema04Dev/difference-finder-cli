import path from 'path';
import fs from 'fs';

const getFixturePath = (file) => path.resolve(process.cwd(), '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

export { getFixturePath, readFile };