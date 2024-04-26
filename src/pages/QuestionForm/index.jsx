/*
import { useState } from 'react';
import axios from 'axios';
import "./style.scss";

export const QuestionForm= () => {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend server
      await axios.post('http://localhost:5000/submit-question', { question, email });
      console.log('Question submitted successfully');
      // Optionally, clear the form after submission
      setQuestion('');
      setEmail('your_email@gmail.com'); // Reset email to your email address
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };  

  return (
    <div className="write-us-form">
      <p>Máte otázku? Napište nám!</p>
      <p>Zkoušíme</p>
      <form onSubmit={handleSubmit}>
        <input
          className="write-us-form__email"
          type="email"
          placeholder="Vaše e-mailová adresa..."
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <textarea
          className="write-us-form__textarea"
          id="question"
          name="question"
          placeholder="Otázka..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button type="submit">Odeslat</button>
      </form>
    </div>
  );
};
*/