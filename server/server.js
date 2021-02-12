const http = require('http');
const express = require('express');
const cors = require('cors');

const Api = express();
const HTTP = http.Server(Api);

Api.use(cors());

Api.get('/test', (req, res) => res.status(200).send('success!'));

HTTP.listen(9001, () => {
    console.log('listening on *:9001');
});
