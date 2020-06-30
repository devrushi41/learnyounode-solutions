var http = require("http");
const fs = require("fs");
const map = require("through2-map");
http
  .createServer(function (request, response) {
    const { method } = request;
    if (method === "POST")
      request
        .pipe(
          map((chunck) => {
            return chunck.toString().toUpperCase();
          })
        )
        .pipe(response);
  })
  .listen(process.argv[2]);
