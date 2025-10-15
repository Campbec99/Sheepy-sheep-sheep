const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const countFile = path.join(__dirname, 'count.txt');

// Initialize count file if missing
if (!fs.existsSync(countFile)) fs.writeFileSync(countFile, '0', 'utf8');

app.use(express.static('public'));

// Simple API to increment & return count
app.get('/api/count', (req, res) => {
  try {
    // read, increment, write back
    let count = parseInt(fs.readFileSync(countFile, 'utf8')) || 0;
    count = count + 1;
    fs.writeFileSync(countFile, count.toString(), 'utf8');
    res.json({ count });
  } catch (err) {
    console.error('Count error:', err);
    res.status(500).json({ error: 'Could not read/write count' });
  }
});

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🐑 Server running on port ${port}`));
