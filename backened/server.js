require('dotenv').config();
const express = require('express');
const cors = require('cors');
const registrationRoutes = require('./routes/registrationRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',
  credentials: true
}));
app.use('/api', registrationRoutes);

app.get('/', (req, res) => res.send('Firebase Registration Backend is running.'));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
