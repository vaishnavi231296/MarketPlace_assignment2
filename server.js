// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // to parse JSON bodies

// MongoDB connection string (local or cloud MongoDB Atlas)
const mongoURI = 'mongodb+srv://vaishnavikandoi28:Vmk%40231296@cluster0.kv5c4.mongodb.net/marketplace?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Basic route to check if the API is running
app.get('/', (req, res) => {
  res.send('Marketplace API is running');
});

// Routes
app.use('/api/products', require('./routes/products.js'));

// Start the server
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});