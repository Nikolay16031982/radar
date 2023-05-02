const PORT = process.env.PORT || 5000;
const http = require("http");
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    res.statusCode = 200;
    res.write("<h2>Server working</h2>");
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server has bin started on port ${PORT}`);
  });
