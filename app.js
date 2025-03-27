const express = require('express');

const app = express();

const port = 4000;

const dolciRouter = require('./routers/posts');

app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log('Server del mio blog');
    res.send(dolciRouter);
});

app.use("/posts", dolciRouter);

app.listen(port, ()=> {
    console.log('sono un server attivo sulla porta ' + port);
})