const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Unhandled promise rejection
//This is a common error that is difficult to debug since it does not always halt the execution of your script immediately. Instead, you may encounter unexpected behavior that is only sometimes reproduced, leaving you confused about the cause.