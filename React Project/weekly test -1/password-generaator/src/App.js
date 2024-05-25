
import "./App.css"
import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characters = lowerCaseLetters + upperCaseLetters;

    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className="container">
    <div className="main">
    <h2 className="heading">Password Generator</h2>
      <label>
        Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="4"
          max="64"
        />
      </label>
      <br />
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Include Symbols:
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <br />
      <input
        type="text"
        readOnly
        value={password}
        style={{ width: '100%', marginTop: '10px' }}
      />
    </div>
    </div>
  );
};

export default PasswordGenerator;
