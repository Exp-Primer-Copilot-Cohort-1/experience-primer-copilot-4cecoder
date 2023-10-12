
// Create web server
const http = require('http');

function createWebServer(port) {
  // Create an HTTP server that listens on the specified port
  const server = http.createServer((req, res) => {
    // Set the response header with a status code of 200 (OK)
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write the "Hello, World!" message to the response
    res.end('Hello, World!\n');
  });

  // Start the server and listen on the specified port
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
