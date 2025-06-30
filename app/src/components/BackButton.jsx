import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: 'var(--accent)',
        cursor: 'pointer',
        fontSize: '1rem',
        marginBottom: '1rem',
      }}
      aria-label="Go back"
    >
      <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '0.5rem' }} />
      Back
    </button>
  );
}
