const express = require('express');
const fs = require('fs');
const {response, request} = require("express");
const app = express();

app.get('/', (request, response) => {
    return response.send('Hello world');
});

app.get('/todos', (request, response) => {
    fs.readFile('./storage/todos.json', 'utf-8', ((err, data) => {
        if (err) {
            return response.status(503).send('Error');
        }

        const todos = JSON.parse(data);

        return response.json({todos: todos});
    }));
});

app.listen(3000, () => {
    console.log('App running on http://localhost:3000');
});
