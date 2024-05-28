import React from 'react';
import Family from './Family.png';

export default function Body() {
  return (
    <div>
      <main>
        <div className="main-image">
          <img src={Family} alt="Family" />
        </div>
        <div className='main-containet'>
          <div className='content'>
            <h1>Think Helth . Think  Massage</h1>
            <p>This is to certify that the following are the family members and they are fully dependent on me.</p>
          </div>
          <div className="btn">
            <button>Submit</button>
            <button>Submit</button>
          </div>
        </div>
      </main>
    </div>
  );
}
