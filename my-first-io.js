const fs = require("fs");
const buf = fs.readFileSync(process.argv[2]);
const converted = buf.toString().split("\n");
console.log(converted.length - 1);
