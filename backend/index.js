// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy Data Store
let articles = [];

// POST /addArticle route to handle form submissions
app.post('/addArticle', (req, res) => {
  const { title, description, information } = req.body;
  console.log(req.body)
  // Validate the request body
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Title and description are required. Description must be at least 50 characters long.',
    });
  }

  // Save the article to the dummy data store
  const newArticle = { id: articles.length + 1, title, description, information };
  articles.push(newArticle);

  // Respond with success
  return res.status(200).json({
    success: true,
    message: 'Article added successfully!',
    article: newArticle,
  });
});

// GET /articles to get all articles
app.get('/articles', (req, res) => {
  res.status(200).json({
    success: true,
    articles,
  });
});

// Server listening on PORT
// const PORT = process.env.PORT || 0; // Use environment variable or auto-assign
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

