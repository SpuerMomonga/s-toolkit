import React from 'react';
import { Sidebar } from './sidebar';

const Layout: React.FC = () => {
  return (
    <div className="h-full flex flex-row gap-2">
      <div className="flex-auto"></div>
      <Sidebar />
    </div>
  );
};

export { Layout };
