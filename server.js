const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Pixel Editor ASM running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} in your browser`);
});
