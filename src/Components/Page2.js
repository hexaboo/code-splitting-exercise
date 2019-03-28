
import React from 'react';

const Page2 = ({ onRouteChange }) =>
  <React.Fragment>
    <button onClick={() => onRouteChange('page 1')}>Page 1</button>
    <button className='disabled'>Page 2</button>
    <button onClick={() => onRouteChange('page 3')}>Page 3</button>
  </React.Fragment>

export default Page2;