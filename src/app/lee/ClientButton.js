import React from 'react';

function ClientButton({ onClick, text }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default ClientButton;