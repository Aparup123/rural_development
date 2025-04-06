import React from 'react';
import FloatingAssistantButton from './FloatingAssistantButton';

// Higher-order component to add voice assistant to any page
const withVoiceAssistant = (Component) => {
  return (props) => {
    return (
      <>
        <Component {...props} />
        <FloatingAssistantButton />
      </>
    );
  };
};

export default withVoiceAssistant;