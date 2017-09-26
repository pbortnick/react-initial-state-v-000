import React from 'react';
import ReactDOM from 'react-dom';

import ToggleButton from './components/ToggleButton';

import Address from './components/Address';

ReactDOM.render(
  <Address
    street="Santa Monica Blvd."
    city="Santa Monica"
  />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <ToggleButton />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div>Components Need To Be Mounted</div>,
//   document.getElementById('root')
// )
