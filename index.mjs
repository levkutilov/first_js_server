import http from "http";

const host = "localhost";
const port = 8000;

function requestListener(req, res) {
    res.writeHead(200);
    req.on("data", function(data) {
        console.log(data.toString())
    })
    res.end("My first server???");
}

// передаем функцию саму и не говорим ей выполниться

const server = http.createServer(requestListener);
server.listen(port, host)