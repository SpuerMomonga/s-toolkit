import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Nav, type LinkItem } from '@/components/nav';
import { Search, Star, Languages, MessageSquareText, Waypoints, Settings } from 'lucide-react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { AvatarMenubar } from './menubar/avatar';

interface SidebarProps {
  entry: string;
  onClick?: (key: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ entry, onClick }) => {
  const links: LinkItem[] = [
    {
      key: 'chatting',
      title: '聊天',
      icon: MessageSquareText,
    },
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
    {
      key: 'vpn',
      title: 'vpn',
      icon: Waypoints,
    },
  ];

  return (
    <TooltipProvider>
      <div className="h-full flex flex-col">
        <div className="border-b-accent p-2">logo</div>
        <div className="h-px bg-border" />
        <ScrollArea className="flex-auto p-2">
          <Nav isCollapsed={true} selectedKey={entry} onClick={onClick} links={links} />
        </ScrollArea>
        <div className="h-px bg-border" />
        <div className="p-2 grid gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
                <span className="sr-only">设置</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              设置
            </TooltipContent>
          </Tooltip>
          <AvatarMenubar>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="#" alt="SpuerMomonga" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                账户
              </TooltipContent>
            </Tooltip>
          </AvatarMenubar>
        </div>
      </div>
    </TooltipProvider>
  );
};

export { Sidebar };
