import React from 'react';

const Page3 = ({ onRouteChange }) =>
  <React.Fragment>
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button onClick={() => onRouteChange('page2')}>Page2</button>
    <button className='disabled'>Page3</button>
  </React.Fragment>

export default Page3;