const fs = require("fs");
const path = require("path");
dir = process.argv[2];
filetype = "." + process.argv[3];
fs.readdir(dir, (err, list) => {
  if (err) {
    console.log(err);
  }
  list.forEach((item) => {
    if (path.extname(item) == filetype) {
      console.log(item);
    }
  });
  //   for (i = 0; i < list.length; i++) {
  //     // console.log(list[i]);
  //     if (path.extname(list[i]) === filetype) {
  //       console.log(list[i]);
  //     }
  //   converted = list.filter((item) => path.extname(item) === filetype);
  //   converted.forEach((element) => {
  //     console.log(element);
  //   });
});
