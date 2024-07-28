import React, { useState } from "react";
import "./RetrieveInformation.css";

function RetrieveInformation() {
  const [aadharNumber, setAadharNumber] = useState("");
  const [person, setPerson] = useState(null);

  const handleSearch = () => {
    const people = JSON.parse(localStorage.getItem("people")) || [];
    const foundPerson = people.find(p => p.aadhar === aadharNumber);
    setPerson(foundPerson);
  };

  return (
    <div className="retrieve-information">
      <h2>Retrieve Information</h2>
      <input
        type="text"
        placeholder="Enter Aadhar Number"
        value={aadharNumber}
        onChange={(e) => setAadharNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {person ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{person.name}</td>
              <td>{person.dob}</td>
              <td>{person.aadhar}</td>
              <td>{person.mobile}</td>
              <td>{person.age}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        aadharNumber && <p>No match found</p>
      )}
    </div>
  );
}

export default RetrieveInformation;
