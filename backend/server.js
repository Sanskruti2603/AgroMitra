const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection (Optional for prototype)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/agromitra', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('MongoDB connection error (mock mode active):', err.message);
});

// Import Routes
const chatRoute = require('./routes/chat');
app.use('/api/chat', chatRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
