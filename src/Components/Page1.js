import React from 'react';

const Page1 = ({ onRouteChange }) =>
  <React.Fragment>
    <button className='disabled'>Page 1</button>
    <button onClick={() => onRouteChange('page 2')}>Page 2</button>
    <button onClick={() => onRouteChange('page 3')}>Page 3</button>
  </React.Fragment>

export default Page1;