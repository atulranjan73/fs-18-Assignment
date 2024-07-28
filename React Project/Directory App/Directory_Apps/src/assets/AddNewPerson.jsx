import React, { useState } from 'react';

function AddNewPerson({ people, savePerson, deletePerson }) {
  const [newPerson, setNewPerson] = useState({
    name: '',
    dateOfBirth: '',
    aadhaarNumber: '',
    mobileNumber: '',
    age: '',
  });

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
      age: name === 'dateOfBirth' ? calculateAge(value) : prevPerson.age,
    }));
  };

  const handleSave = () => {
    if (validatePerson(newPerson)) {
      savePerson(newPerson);
      setNewPerson({ name: '', dateOfBirth: '', aadhaarNumber: '', mobileNumber: '', age: '' });
    }
  };

  const validatePerson = ({ name, dateOfBirth, aadhaarNumber, mobileNumber }) => {
    if (!name || !dateOfBirth || aadhaarNumber.length !== 12 || mobileNumber.length !== 10) {
      alert('Invalid data. Please fill all fields correctly.');
      return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Add New Person</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhaar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.dateOfBirth}</td>
              <td>{person.aadhaarNumber}</td>
              <td>{person.mobileNumber}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => deletePerson(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><input type="text" name="name" value={newPerson.name} onChange={handleInputChange} /></td>
            <td><input type="date" name="dateOfBirth" value={newPerson.dateOfBirth} onChange={handleInputChange} /></td>
            <td><input type="text" name="aadhaarNumber" value={newPerson.aadhaarNumber} maxLength="12" onChange={handleInputChange} /></td>
            <td><input type="text" name="mobileNumber" value={newPerson.mobileNumber} maxLength="10" onChange={handleInputChange} /></td>
            <td><input type="text" name="age" value={newPerson.age} readOnly /></td>
            <td>
              <button onClick={handleSave}>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddNewPerson;
