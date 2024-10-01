import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="h-10 flex items-center">
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
};

export { Header };
