import React from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="h-full flex flex-row">
      <div className="flex-auto p-2 flex flex-col">
        <Header />
        <div className="flex-auto">{children}</div>
        <Footer />
      </div>
      <div className="h-full w-px bg-border" />
      <Sidebar />
    </div>
  );
};

export { Layout };
