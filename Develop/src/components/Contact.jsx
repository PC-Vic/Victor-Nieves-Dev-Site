import React, { useState } from 'react';

const Contact = () => {
const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
    ...formData,
    [name]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, you can send the data to a server or perform other actions
    console.log('Form data submitted:', formInfo);
};

return (
    <div className="contact-container">
    <h2>Contact Me</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            value={formInfo.name}
            onChange={handleChange}
            placeholder="Your Name"
        />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formInfo.email}
            onChange={handleChange}
            placeholder="Your Email"
        />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
            id="message"
            name="message"
            value={formInfo.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4" // Adjust the number of rows based on your design
        />
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
);
};

export default Contact;
