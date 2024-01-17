const path = require('path');

console.log(path.sep)

const filePath = path.join('/content','subfolder','text');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,'path-module.js');
console.log(absolutePath);

const relativePath = path.relative(__dirname,__filename);
console.log(relativePath);