import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 50 }) => {
  return <img width={size} height={size} src="/favicon.png" alt="ERP Logo" />;
};

export default Logo;
