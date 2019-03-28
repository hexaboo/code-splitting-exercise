import React from 'react';

const Page3 = ({ onRouteChange }) =>
  <React.Fragment>
    <button onClick={() => onRouteChange('page 1')}>Page 1</button>
    <button onClick={() => onRouteChange('page 2')}>Page 2</button>
    <button className='disabled'>Page 3</button>
  </React.Fragment>

export default Page3;