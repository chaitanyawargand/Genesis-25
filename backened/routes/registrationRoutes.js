const express = require('express');
const router = express.Router();
const { registerUser, getAllRegistrations } = require('../controllers/registrationController');

router.post('/register', registerUser);
router.get('/all',getAllRegistrations);

module.exports = router;
