import React from 'react';

function Alert(props) {
  return (
    <div className='mt-3'>
      <p className='error-text'>{props.children}</p>
    </div>
  );
}

export default Alert;
