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
});

server.get("/crudes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const crud = crudes.find(item => item.id === id);
    const status = crudes ? 200 : 404;

    console.debug("GET :: /crudes/:id", crudes);
    

    return res.status(status).json(crud);
});

server.post("/crudes", (req, res) => {
    const { name, site } = req.body;
    const nestId = crudes[crudes.length - 1].id + 1;

    const newCrudes = {id, name, site};
    crudes.push(newCrudes);

    return res.status(201).json(newCrudes);
});

server.put("/crudes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = crudes.findIndex(item.id === id);
    const status = index >= 0 ? 200 : 400;

    if(index >= 0){
        crudes[index] = {id: parseInt(id), name, site}
    }

    return res.status(status),json(crudes[index]);
});

server.delete("/crudes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = crudes.findIndex(item.id === id);
    const status = index >= 0 ? 200 : 400;

    if(index >= 0){
    crudes.splice(index, 1);
    }

    return res.status(status).json();
});


server.listen(3000);