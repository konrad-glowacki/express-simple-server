const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Hello Express16!');
});

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
