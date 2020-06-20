import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('LIstagem de usuários');

    response.json([
        'Diego',
        'Camilla',
        'Nandes',
        'Saburi'
    ]);
});

app.listen(3333);