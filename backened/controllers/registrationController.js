const { db } = require('../config/firebaseAdmin');
const sendEmail = require('../utils/sendEmail');

const COLLECTION = 'registrations';

exports.registerUser = async (req, res) => {
  try {
    const { name, email, phone, teamName, ideaBrief } = req.body;
    const registrationsRef = db.collection(COLLECTION);
    const duplicateQuery = registrationsRef
      .where('email', '==', email)
      .limit(1);
    const dupSnap = await duplicateQuery.get();
    if (!dupSnap.empty) {
      return res.status(409).json({ message: 'Email already registered.' });
    }
    const phoneQuery = registrationsRef.where('phone', '==', phone).limit(1);
    const phoneSnap = await phoneQuery.get();
    if (!phoneSnap.empty) {
      return res.status(409).json({ message: 'Phone already registered.' });
    }
    const docRef = await registrationsRef.add({name,email,phone,team_name: teamName,idea_brief: ideaBrief,created_at: new Date().toISOString(),});
    const subject = 'Registration Successful';
    const html = `
      <p>Hi ${name},</p>
      <p>Thank you for registering. We received your submission for <strong>${teamName}</strong>.</p>
      <p><strong>Your idea brief:</strong><br/>${ideaBrief}</p>
      <p>We will reach out to you soon.</p>
      <p>— ${process.env.EMAIL_FROM_NAME || 'Team'}</p>
    `;
    sendEmail(email, subject, html).catch(err => console.error(err));
    return res.status(201).json({ message: 'Registration successful.', id: docRef.id });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
};
exports.getAllRegistrations = async (req, res) => {
  try {
    const snapshot = await db.collection(COLLECTION).orderBy('created_at', 'desc').get();
    const items = [];
    snapshot.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
    });
    res.json(items);
  } catch (err) {
    console.error('Get all error:', err);
    res.status(500).json({ message: 'Server error.' });
  }
};
