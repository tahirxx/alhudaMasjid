// GradientBackground.js
import React from 'react';

const GradientBackground = ({ children }) => {
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #3494e6, #ec6ead)',
    height: '100vh',
  };

  return (
    <div style={gradientStyle} className="gradient-background">
      {children}
    </div>
  );
};

export default GradientBackground;

