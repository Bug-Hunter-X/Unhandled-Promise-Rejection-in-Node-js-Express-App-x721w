const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might reject
    const result = await someAsyncOperation();
    res.send('Hello World! ' + result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a success scenario
    resolve('Success!');
  });
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});