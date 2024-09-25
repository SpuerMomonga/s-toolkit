import React from 'react';
import { Sidebar } from './sidebar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="h-full flex flex-row">
      <div className="flex-auto p-2 flex flex-col">
        <div></div>
        <div className="flex-auto">{children}</div>
        <div></div>
      </div>
      <div className="h-full w-px bg-border" />
      <Sidebar />
    </div>
  );
};

export { Layout };
