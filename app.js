const express = require('express');
const app = express();
const axios = require('axios');

// Make sure your server starts first before making this request
// Replace 'https://your-api-url.com/greet' with the correct URL (e.g., localhost)
axios.get('http://localhost:3000/greet', {
  params: { name: 'John' }
})
.then(response => {
  console.log(response.data); // Output: { message: 'Hello, John!' }
})
.catch(error => {
  console.error(error);
});

// API endpoint
app.get('/greet', (req, res) => {
    const name = req.query.name || 'World';
    res.json({ message: `Hello, ${name}!` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



