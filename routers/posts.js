const express = require('express');

const router = express.Router();

const posts = require('../posts');

//index
router.get('/', (req,res)=>{
    // res.send('Lista dei dolci');
    res.json(posts);
});

//show
router.get('/:id', (req,res)=>{
    // res.send('Dettagli del dolce ' + id);
    const {id} = req.params;
    let result = ('Ricetta non trovata!')
    posts.forEach((element)=> {
        if(element.slug===id){
            result = element;
        };
    });
    res.json(result);
});

//create
router.post('/', (req,res)=>{
    res.send('Creazione nuovo dolce');
});

//total update 
router.put('/:id', (req,res)=>{
    const {id} = req.params
    res.send('Modifica integrale del dolce ' + id);
});

//partial update 
router.patch('/:id', (req,res)=>{
    const {id} = req.params
    res.send('Modifica parziale del dolce ' + id);
});

//delete
router.delete('/:id', (req,res)=>{
    const {id} = req.params
    res.send('Eliminazione del dolce ' + id);
});

module.exports = router;