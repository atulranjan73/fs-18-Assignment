import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="container">
        <h2>You have no notes</h2>
        <Link to="/create-notes">
          <button>Create Notes</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
