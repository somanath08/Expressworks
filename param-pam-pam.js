const express = require('express');
const crypto = require('crypto');

const app = express();
app.put('/message/:id', (request, response) => {
  response.end(crypto.createHash('sha1').update(new Date().toDateString() + request.params.id).digest('hex'));
});
app.listen(Number(process.argv[2]));
