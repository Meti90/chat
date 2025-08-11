const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const USERS_FILE = './users.json';

// اگه فایل وجود نداره بساز
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// ثبت‌نام
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'نام کاربری و رمز عبور الزامی است' });
    }

    let users = JSON.parse(fs.readFileSync(USERS_FILE));

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ error: 'این نام کاربری وجود دارد' });
    }

    users.push({ username, password });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    res.json({ message: 'ثبت‌نام موفق بود' });
});

// لاگین
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    let users = JSON.parse(fs.readFileSync(USERS_FILE));

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'نام کاربری یا رمز اشتباهه' });
    }

    res.json({ message: 'ورود موفق' });
});

app.listen(3000, () => {
    console.log('سرور روی پورت 3000 ران شد');
});
