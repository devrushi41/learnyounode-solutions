const fs = require("fs");
const path = require("path");
module.exports = (dirname, fileext, callback) => {
  fs.readdir(dirname, (err, list) => {
    if (err) {
      return callback(err);
    }
    const extension = "." + fileext;
    list = list.filter((item) => path.extname(item) === extension);
    callback(null, list);
  });
};
