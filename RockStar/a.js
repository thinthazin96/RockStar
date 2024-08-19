const{ createServer } = require("node:http"); //Create web server

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Contetn-Type", "textt/html");
    const today = new Date();
    const content = `
        <h1>Server Side</h1>
        <p>${today.toISOString()}</p>
    `;

    res.end(content); // return current date and time
});

//web server will run at port 3000
server.listen(3000, "localhost", () => {
    console.log("Server running at 3000. Press Ctrl+C to stop");
});