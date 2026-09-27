const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    return res.end(html);
  }
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Page not found');
});
if (require.main === module) server.listen(PORT, () => console.log(`College Management running at http://localhost:${PORT}`));
module.exports = server;
