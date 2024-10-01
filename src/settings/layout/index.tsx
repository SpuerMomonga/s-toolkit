import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './sidebar';
import Header from './header';
import { SelectedItem } from '@/components/nav';

interface LayoutProps {
  children?: React.ReactNode;
  selected: SelectedItem;
  onSelect?: (select: SelectedItem) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 900);

  const handleResize = () => {
    setIsCollapsed(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-[1200px] h-full mx-auto mt-12 overflow-y-auto">
      <div className="h-full mx-4 flex">
        <Sidebar isCollapsed={isCollapsed} selectedKey={selected.key} onSelect={onSelect} />
        <div
          className={cn(
            'flex-1 flex flex-col gap-5 ms-64 mb-12 p-6 bg-background rounded-xl border shadow-lg',
            isCollapsed && 'ms-[72px]',
          )}
        >
          <Header title={selected.title} />
          <div className="h-px bg-border" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
