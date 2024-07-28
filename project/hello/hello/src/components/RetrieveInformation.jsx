import React, { useState } from 'react';
import '../App.css'


function RetrieveInformation({ people }) {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const person = people.find(p => p.aadhaarNumber === aadhaarNumber);
    setResult(person);
  };

  return (
    <div>
      <h2>Retrieve Information</h2>
      <div>
        <label>Aadhaar Number: </label>
        <input type="text" value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} maxLength="12" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {result ? (
          <table>
            <tbody>
              <tr><td>Name:</td><td>{result.name}</td></tr>
              <tr><td>Date of Birth:</td><td>{result.dateOfBirth}</td></tr>
              <tr><td>Aadhaar Number:</td><td>{result.aadhaarNumber}</td></tr>
              <tr><td>Mobile Number:</td><td>{result.mobileNumber}</td></tr>
              <tr><td>Age:</td><td>{result.age}</td></tr>
            </tbody>
          </table>
        ) : (
          aadhaarNumber && <p>No match found</p>
        )}
      </div>
    </div>
  );
}

export default RetrieveInformation;
