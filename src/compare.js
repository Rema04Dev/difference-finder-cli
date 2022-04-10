import fs from 'fs';

const compareFiles = (filepath1, filepath2) => {
    const buff1 = fs.readFileSync(filepath1, 'utf8')
    const buff2 = fs.readFileSync(filepath2, 'utf8')
    console.log(buff1, buff2)
  }
export default compareFiles;