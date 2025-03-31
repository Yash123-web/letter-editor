const express = require('express');
const cors = require('cors');
const passport = require('passport');
const letterRoutes = require('./routes/letterRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
require('./config/passport');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/letters', letterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));