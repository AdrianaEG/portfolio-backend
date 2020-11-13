const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const index = require('./data/index');
const projects = require('./data/projects');
const education = require('./data/education');


app.get('/', (req, res)=>{
    res.send('Funcionando');
})

app.get('/index', (req, res)=>{
    res.json(index);
})

app.get('/projects', (req, res)=>{
    res.json(projects);
})

app.get('/education', (req, res)=>{
    res.json(education);
})

app.listen(port, ()=>{
    console.log(`Estoy en el puerto: ${port}`);
});

