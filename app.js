const express = require('express');

const app = express();

const port = 4000;

const dolci = require('./routers/posts');

app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log('Server del mio blog');
    res.send('<h1>Server del mio blog</h1>');
});

app.use("/posts", dolci);

app.listen(port, ()=> {
    console.log('sono un server attivo sulla porta ' + port);
})