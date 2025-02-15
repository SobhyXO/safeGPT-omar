const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const chatRoutes = require('./routes/chatRoutes');
const healthRoutes = require('./routes/healthRoutes');
const cors = require('cors');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());  // Correct usage of cors
app.use(express.json());  // Middleware to parse JSON bodies

// Routes
app.use('/api/users', userRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/medical-documents', healthRoutes);


// 404 Route for unmatched paths
app.use('*', (req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));