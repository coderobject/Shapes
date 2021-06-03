const express = require('express')
const app = express()
const monsterRouter=require('./monsters.js')
app.use('/monsters', monsterRouter)
const PORT= 3000;


app.listen(PORT);

app.get('/', (req,res,next)=>{
    res.send(req.params)
    console.log(req.params.name)
    console.log(req.query)
    console.log(req.query.name)
})

app.post('/cookies', (req,res,next)=>{
    console.log(req.query.name)
})

app.put('/put/:id', (req, res, next) =>{
    const monsterUpdate=req.query;
    monsters[req.params.id]=monsterUpdate
    res.send(monsters[req.params.id])
})

app.post('/post/:id', (req,res,next) => {
    
})


/*

const triangle=document.getElementById('triangle');

triangle.addEventListener('click', anim)

function anim (){
    triangle.style.animation='rotation 1s ease';
}

let x='whynot';
let array;

if (x='why'){
    array=[1,0]
}

if (x='whynot'){
    array=[1,1,1,1]
}

console.log(array)



const love = {'1':'happy', '2':'sad'};
const what=love['1']
console.log(what)
love[0]='fdasfds'
console.log(love[0])

*/