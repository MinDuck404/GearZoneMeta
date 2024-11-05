// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); // Nhớ import file db.js của bạn
const authRoutes = require('./Routes/Auth'); // Import routes của auth

const app = express();
const PORT = process.env.PORT || 3000;
// Kết nối với MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes); // Đường dẫn cho API đăng ký và đăng nhập

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
