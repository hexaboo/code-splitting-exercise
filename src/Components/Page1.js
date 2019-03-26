import React from 'react';

const Page1 = ({ onRouteChange }) =>
  <React.Fragment>
    <button className='disabled'>Page1</button>
    <button onClick={() => onRouteChange('page2')}>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </React.Fragment>

export default Page1;