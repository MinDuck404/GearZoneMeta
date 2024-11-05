const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://admin1:admin123456@cluster0.1s3pi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Thay đổi cho phù hợp
        await mongoose.connect(uri);
        console.log('Kết nối tới MongoDB thành công');
    } catch (err) {
        console.error('Lỗi kết nối tới MongoDB:', err.message);
        process.exit(1); // Thoát nếu có lỗi
    }
};

module.exports = connectDB;
