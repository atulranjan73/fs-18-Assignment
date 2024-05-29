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
        <div className='about'>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque repudiandae sequi, sunt fugit magnam, culpa ipsam distinctio illum et similique voluptate autem cum</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia facere voluptatibus, debitis quasi velit at nemo cumque quam consequuntur ipsam illo dignissimos explicabo ullam voluptatum autem, in rem quaerat cupiditate fuga! Quae, ex doloremque?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia facere voluptatibus, debitis quasi velit at nemo cumque quam consequuntur ipsam illo dignissimos explicabo ullam voluptatum autem, in rem quaerat cupiditate fuga! Quae, ex doloremque?</p>
          </div>
          <hr/>
          <div className="message">
            <h2>Family Wellness Messsage Theeaoy</h2>
            <p>1939 Maint street suit 123 Mainkand ML2233</p>
            <p>phone - xxxxxxxxxxxx</p>
          </div>
      </main>

      <footer>
        <div className='copy'>
          <h1 className='copy-h'>Copyright Atul Ranjan</h1>
          <p>Power by  Website</p>
        </div>
      </footer>
    </div>
  );
}
