import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Nav, type LinkItem } from './nav';
import { Search, Star, Languages } from 'lucide-react';

const Sidebar: React.FC = () => {
  const links: LinkItem[] = [
    {
      key: 'search',
      title: '搜索',
      icon: Search,
    },
    {
      key: 'translate',
      title: '翻译',
      icon: Languages,
    },
    {
      key: 'collect',
      title: '收藏',
      icon: Star,
    },
  ];

  return (
    <div className="h-full w-14 flex flex-col p-2">
      <div className="border-b-accent">logo</div>
      <div className="flex-auto">
        <Nav isCollapsed={false} links={links} />
      </div>
      <div>
        <Avatar>
          <AvatarImage src="#" alt="SpuerMomonga" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export { Sidebar };
