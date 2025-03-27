const express = require('express');

const app = express();

const port = 5000;

const dolciRouter = require('./routers/posts');

app.use(express.static('public'));

app.use("/posts", dolciRouter);

app.get('/', (req,res) => {
    res.send('<h1>Il mio server</h1>');
});

app.listen(port, ()=> {
    console.log('sono un server attivo sulla porta ' + port);
})