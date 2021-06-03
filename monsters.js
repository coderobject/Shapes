const express = require('express')

const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };

const monsterRouter=express.Router();


monsterRouter.get('/:id', (req,res,next)=>{
    const monster=monsters[req.params.id]
    if (monster){
        res.send(monster)
    } else {
        res.status(404).send('monster time')
    }
})

module.exports = monsterRouter