import React, { useState } from "react";
import styled from "styled-components";

const StyledContactPage = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
    }

    input,
    textarea {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    button {
      background-color: blue;
      color: #fff;
      padding: 10px;
      border: none;
      cursor: pointer;
      width: 100%;

      &:hover {
        background-color: green;
      }
    }
  }
`;

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save contact details to local storage
    const contactDetails = {
      name,
      email,
      message,
    };
    localStorage.setItem("contactDetails", JSON.stringify(contactDetails));

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <StyledContactPage>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledContactPage>
  );
}

export default ContactPage;
