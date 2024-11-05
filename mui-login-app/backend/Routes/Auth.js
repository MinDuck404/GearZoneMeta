// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/user'); // Nhớ import model User
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Kiểm tra xem dữ liệu có hợp lệ không
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Thiếu thông tin đăng ký' });
    }

    try {
        // Kiểm tra xem người dùng đã tồn tại chưa
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Người dùng đã tồn tại' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo người dùng mới
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


// Đăng nhập người dùng
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Tìm người dùng theo email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Người dùng không tồn tại' });
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Mật khẩu không chính xác' });
        }

        // Tạo token cho người dùng
        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' }); // Thay 'secretkey' bằng secret của bạn

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
