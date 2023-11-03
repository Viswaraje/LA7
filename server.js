// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3004;

// Define a route to serve your React application (assumes your React app is built in the 'build' directory)
app.use(express.static('build'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
