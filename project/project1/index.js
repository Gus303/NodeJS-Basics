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

//http://localhost:3000/hello/Gustavo
//Route params = /hello/:nome

server.get("/hello/:nome", (req, res) =>{
    const name= req.params.name;

    return res.json({ 
        title: "Hello World",
        message: `My name is ${name}, good right ?`
    });
})
server.listen(3000);