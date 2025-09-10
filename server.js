const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Sample riddles
const riddles = [
  { question: "What has to be broken before you can use it?", answer: "An egg" },
  { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "A candle" },
  { question: "What month of the year has 28 days?", answer: "All of them" },
  { question: "What is full of holes but still holds water?", answer: "A sponge" },
  { question: "What question can you never answer yes to?", answer: "Are you asleep yet?" }
];

// API info
app.get('/api', (req, res) => {
  res.json({
    name: "Riddle API",
    version: "1.0",
    description: "An API that returns random riddles in JSON format."
  });
});

// Random riddle
app.get('/api/riddle', (req, res) => {
  const showAnswer = req.query.showAnswer === 'true';
  const riddle = riddles[Math.floor(Math.random() * riddles.length)];

  if (showAnswer) {
    res.json(riddle);
  } else {
    res.json({ question: riddle.question });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Riddle API running at http://localhost:${PORT}`));
