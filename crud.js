const express = require("express");
const server = express();

server.use(express.json());

let crudes = [
    { id: 1, name: "Google", site: "http://google.com"},
    { id: 2, name: "LinkedIn", site: "http://linkedin.com"},
    { id: 3, name: "Github", site: "http://github.com"}
];

server.get("/crudes", (req, res) => {
    return res.json(crudes);
})

server.get("/crudes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const crud = crudes.find(item => item.id === id);
    const status = crudes ? 200 : 404;

    return res.status(status).json(crud);
})

server.listen(3000);