const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => {
    try {
        console.log(`app started on ${PORT} port`);
    } catch (e: unknown) {
        console.log(e);
    }
})
