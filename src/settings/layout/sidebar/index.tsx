import React from 'react';
import { LinkItem, Nav } from '@/components/nav';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Search, Star, Languages, Settings, Waypoints } from 'lucide-react';
import Logo from '@/components/icon/logo';

interface SidebarProps {
  entry: string;
  onClick?: (key: string) => void;
  isCollapsed: boolean;
}

const links: LinkItem[] = [
  {
    key: 'base',
    title: '基本配置',
    icon: Settings,
  },
  {
    key: 'search',
    title: '搜索设置',
    icon: Search,
  },
  {
    key: 'translate',
    title: '翻译设置',
    icon: Languages,
  },
  {
    key: 'bookmark',
    title: '书签设置',
    icon: Star,
  },
  {
    key: 'vpn',
    title: 'vpn设置',
    icon: Waypoints,
  },
  {
    key: 'ai-prompts',
    title: '提示词管理',
    icon: Waypoints,
  },
];

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isCollapsed = false } = props;
  return (
    <TooltipProvider>
      <aside
        className={cn(
          'fixed w-60 p-2 flex flex-col bg-background rounded-xl border shadow-lg',
          isCollapsed && 'w-14 gap-2',
        )}
      >
        {isCollapsed ? (
          <>
            <div className="h-8 w-9 flex justify-center items-center">
              <Logo className="h-6 w-6 text-primary" />
              <span className="sr-only">Toolkit</span>
            </div>
            <div className="h-px bg-border" />
          </>
        ) : (
          <div className="h-16 w-full px-4 py-4 flex gap-1">
            <div className="h-8 w-9 flex justify-center items-center">
              <Logo className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 text-2xl font-bold">Toolkit</div>
          </div>
        )}
        <Nav links={links} {...props} />
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
