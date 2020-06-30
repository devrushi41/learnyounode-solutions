const http = require("http");
result = "";
http
  .get(process.argv[2], (response) => {
    response.setEncoding("utf8");

    response.on("data", (chunck) => (result += chunck));
    response.on("end", () => {
      console.log(result.length);
      console.log(result);
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
