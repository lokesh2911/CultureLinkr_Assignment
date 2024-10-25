import './App.css'


import  { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display success message and reset form
    setSubmitted(true);

    // Reset form after a few seconds (for demonstration)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false); // Go back to the form
    }, 2000); // You can adjust the time as per your requirement
  };

  return (
    <div className="App">
      <h1>Contact Form</h1>
      {submitted ? (
        <div className="success-message">Thank you! Your message has been received.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
