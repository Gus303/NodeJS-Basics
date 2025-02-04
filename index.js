const express = require("express");
const server = express();

//http://localhost:3000/hello?name=Gustavo&age=19
// Query params = ?name=Gustavo&age=19

//http://localhost:3000/hello/Gustavo
//Route params = /hello/:name

server.get("/hello", (req, res) => {
    const { name, age } = req.query;

    return res.json({ 
        title: "Hello World",
        message: `My name is ${name}`,
        age: age
    });
});

server.listen(3000);