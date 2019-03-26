import React from 'react';

const Page2 = ({ onRouteChange }) =>
  <React.Fragment>
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button className='disabled'>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </React.Fragment>

export default Page2;