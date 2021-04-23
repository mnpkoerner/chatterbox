const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); // needed for post/put requests
app.use(express.static('build'));

const words = require('./routes/words.router.js');


app.use('/words', words);


/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
