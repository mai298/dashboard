const express = require('express');
const app = express();
const port = 3001;

// Define announcement data
const announcements = [
  {
    id: 1,
    imgSrc: '../imgs/fem.jpg',
    name: 'John Doe',
    specialization: 'Mathematics',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    imgSrc: '../imgs/fem.jpg',
    name: 'Jane Smith',
    specialization: 'Science',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

// Define an endpoint to retrieve announcements
app.get('/announcements', (req, res) => {
  res.json(announcements);
});


//clear cahce
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});