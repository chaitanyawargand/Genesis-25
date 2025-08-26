import React, { useState } from 'react';
import axios from 'axios';
import './styles/RegistrationForm.css';
import api from '../api'
const RegistrationForm = () => {
  const [formData, setFormData] = useState({name: '',email: '',phone: '',teamName: '',ideaBrief: ''});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!formData.name || !formData.email || !formData.phone || !formData.teamName || !formData.ideaBrief) {
      setMessage('All fields are required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setMessage('Invalid email format.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setMessage('Phone number must be 10 digits.');
      return;
    }
    setLoading(true);
    try {
      await api.post('/api/register', formData);
      setMessage('Registration successful!');
      setFormData({ name: '', email: '', phone: '', teamName: '', ideaBrief: '' });
    } catch (error) {
      setMessage('Error during registration!');
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <div className="form-container">
      <h2>Startup Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}required/>
        <input type="tel"name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}required/>
        <input type="text"name="teamName"placeholder="Team / Startup Name"value={formData.teamName}onChange={handleChange}required/>
        <textarea name="ideaBrief"placeholder="Briefly describe your idea"value={formData.ideaBrief}onChange={handleChange}required/>
        <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Register'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};
export default RegistrationForm;
