const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Hello Express16!');
  console.log(`Barrr`);
});

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
