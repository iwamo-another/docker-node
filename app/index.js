// server.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/hello", (req, res) => {
    res.send(`
        <h1>Docker + Node</h1>
        <span>Hello Docker!!</span>
    `);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
