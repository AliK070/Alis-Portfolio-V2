import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css';
export default function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      className='button_transform'
      aria-label="Go back"
    >
      <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '0.5rem' }} />
      Back
    </button>
  );
}
