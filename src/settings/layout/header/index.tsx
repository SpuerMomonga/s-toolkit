import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h3 className="text-lg font-bold">{title}</h3>;
};

export default Header;
