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



server.listen(3000);