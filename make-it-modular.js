const filterFunction = require("./mymodule");

dir = process.argv[2];
filetype = process.argv[3];

filterFunction(dir, filetype, function (err, data) {
  if (err) {
    return console.error("There was an error:", err);
  }
  data.forEach((element) => {
    console.log(element);
  });
});
