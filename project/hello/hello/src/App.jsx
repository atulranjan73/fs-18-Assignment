import React, { useState } from 'react';
import AddNewPerson from './components/AddNewPerson';
import RetrieveInformation from './components/RetrieveInformation';

function App() {
  const [tab, setTab] = useState('add');
  const [people, setPeople] = useState(() => {
    const savedPeople = localStorage.getItem('people');
    return savedPeople ? JSON.parse(savedPeople) : [];
  });

  const savePerson = (person) => {
    setPeople((prevPeople) => {
      const newPeople = [...prevPeople, person];
      localStorage.setItem('people', JSON.stringify(newPeople));
      return newPeople;
    });
  };

  const deletePerson = (index) => {
    setPeople((prevPeople) => {
      const newPeople = prevPeople.filter((_, i) => i !== index);
      localStorage.setItem('people', JSON.stringify(newPeople));
      return newPeople;
    });
  };

  return (
    <div>
      <h1>Directory App</h1>
      <div>
        <button onClick={() => setTab('add')}>Add New Person</button>
        <button onClick={() => setTab('retrieve')}>Retrieve Information</button>
      </div>
      {tab === 'add' && <AddNewPerson people={people} savePerson={savePerson} deletePerson={deletePerson} />}
      {tab === 'retrieve' && <RetrieveInformation people={people} />}
    </div>
  );
}

export default App;

