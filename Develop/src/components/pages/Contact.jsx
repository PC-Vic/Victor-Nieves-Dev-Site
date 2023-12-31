import React, { useState } from 'react';

const Contact = () => {

  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        setErrors((prevErrors) => ({ ...prevErrors, name: value ? '' : 'Name required' }));
        break;
      case 'email':
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prevErrors) => ({ ...prevErrors, email: emailRegex.test(value) ? '' : 'Invalid email' }));
        break;
      case 'message':
        setErrors((prevErrors) => ({ ...prevErrors, message: value ? '' : 'Required' }));
        break;
      default:
        break;
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

       // Validate all fields before submitting
       Object.keys(formInfo).forEach((name) => validateField(name, formInfo[name]));
       Object.keys(formInfo).forEach((email) => validateField(email, formInfo[email])); // added to test email validation

       // Check if there are any errors
       if (Object.values(errors).some((error) => error !== '')) {
         console.log('Form submission failed. Please correct errors.');
         return;
       }
   
       // Proceed with form submission
       console.log('Form data submitted:', formInfo);

    // EmailJS service ID, template ID, and Public Key
    const serviceID = 'service_95bbzmp';
    const templateID = 'template_hlprn1x';
    const publicKey = '373EmLEa4psxkPr3F';

    // Object that contains template parameters for email
    const templateParams = {
      from_name: formInfo.name,
      from_email: formInfo.email,
      to_name: formInfo.name,
      message: formInfo.message,
      reply_to: formInfo.email,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setFormInfo({
        name: '',
        email: '',
        message: '',
      });
      window.alert('Thank you for reaching out! I will contact you shortly.');
    })
    .catch((error) => {
      console.log('Email failed to send!', error);
    });
  };

  return (
    <div className="contact-container">
      <h2 id='contact-heading'>Get in touch!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formInfo.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formInfo.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formInfo.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Message"
            rows="4"
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button id="contact-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
