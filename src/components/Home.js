import React from 'react';
import Locations from './Locations';

function Home(props) {
  return (
    <div className='Home'>
      <div className='top'>
        <input type='text' name='location' />
        <input type='text' name='x' />
        <input type='text' name='y' />
        <button onClick=''>Submit</button>
      </div>

      <Locations />
      <div className='right'></div>
    </div>
  );
}

export default Home;
