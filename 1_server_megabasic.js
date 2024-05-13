const http = require("node:http");

// console.log(http.STATUS_CODES);

let numPeticiones = 1;
const servidor = http.createServer((request, response) => {
  // console.log(`Petición ${numPeticiones++}`)
  // response.writeHead(200, { 'Content-Type': 'text/plain' })
  // response.end('Hola Mundo')
  // response.writeHead(200, { 'Content-Type': 'application/json' })
  // response.end(JSON.stringify({ mensaje: 'Hola Mundo' }))
  // console.log("url:", request.url);
  // console.log(request.method);
  // console.log(request.headers);
  console.log(response.statusCode);
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ mensaje: "Hola Mundo" }));
});

servidor.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
