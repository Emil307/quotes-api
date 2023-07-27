const express = require('express');
const dotenv = require('dotenv').config();
const poetRouter = require('./routes/poet.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', poetRouter)

app.listen(PORT, () => {
    try {
        console.log(`app started on ${PORT} port`);
    } catch (e: unknown) {
        console.log(e);
    }
});
