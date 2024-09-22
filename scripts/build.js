// const fs = require('fs');
const fs = require('fs-extra');
const path = require('path');

const dirPath = path.join(__dirname, '../build');
const sourceDir = path.join(__dirname, '../static');

// console.log(dirPath);

main();

function main() {
  fs.removeSync(dirPath);
  fs.copySync(sourceDir, dirPath);
}
