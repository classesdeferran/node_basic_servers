const http = require('node:http')

const puerto = process.argv[2] || 0

const server = http.createServer((req, res) => {
    
    res.statusCode = 404;
    let body = ""
    let title = ""
    if (res.statusCode === 200) {        
        title = "Todo OK"
        body = "<h1>Todo perfecto</h1>"
        body += `<p>${req.url}</p>`

    } else if (res.statusCode === 404) {
        title = 'Error 404'
        body = 'Página no encontrada'
    }
    
    // esto funciona también
    // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8'  })
    res.writeHead(200, { 'Content-Type': 'text/html'  })
    res.write(
        `<html>
        <head>
        <meta charset="utf-8">
        <title>${title}</title>
        </head>
        <body>
        ${body}
        </body>
        </html>`
    )
    res.end()
})

server.listen(puerto, () => {
    console.log(`Server listening on http://localhost:${server.address().port}`);
})