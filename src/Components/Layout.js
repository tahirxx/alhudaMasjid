// Layout.js
import React from 'react';
import GradientBackground from './GradientBackground';

const Layout = ({ children }) => (
  <GradientBackground>
    {children}
  </GradientBackground>
);

export default Layout;
