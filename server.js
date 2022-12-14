const express = require('express');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Run server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App is running on port http://localhost:${PORT}`);
    })
});