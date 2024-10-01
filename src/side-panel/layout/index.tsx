import React from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { Footer } from './footer';
import { SelectedItem } from '@/components/nav';

interface LayoutProps {
  children?: React.ReactNode;
  selected: SelectedItem;
  onSelect?: (select: SelectedItem) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect }) => {
  return (
    <div className="h-full flex flex-row">
      <div className="flex-auto p-2 flex flex-col gap-2">
        <Header title={selected.title} />
        <div className="flex-auto">{children}</div>
        <Footer />
      </div>
      <div className="h-full w-px bg-border" />
      <Sidebar selectedKey={selected.key} onSelect={onSelect} />
    </div>
  );
};

export { Layout };
