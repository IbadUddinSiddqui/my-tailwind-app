"use client"; // Required for client-side rendering

import React, { useState } from 'react';
import Header from '../components/Header/Header';
const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset the status message
    setStatusMessage('');

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });

    if (response.ok) {
      setStatusMessage('Email sent successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } else {
      setStatusMessage('Failed to send email.');
    }
  };

  return (
    <>
    <Header/>
    <div className="p-8 max-w-md mx-auto mt-24 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      {statusMessage && <p className="mb-4 text-center text-green-500">{statusMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="phone">Phone</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="subject">Subject</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full p-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
    </>  );
};

export default Contact;
