import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Nav, SelectedItem, type LinkItem } from '@/components/nav';
import { Search, Star, Languages, MessageSquareText, Waypoints, Settings } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { AvatarMenubar } from './menubar/avatar';
import Logo from '@/components/icon/logo';

interface SidebarProps {
  selectedKey: string;
  onSelect?: (select: SelectedItem) => void;
}

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
    key: 'bookmark',
    title: '书签',
    icon: Star,
  },
  {
    key: 'vpn',
    title: 'vpn',
    icon: Waypoints,
  },
];

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <TooltipProvider>
      <aside className="h-full flex flex-col gap-2 p-2">
        <div className="h-8 w-9 flex justify-center items-center">
          <Logo className="h-6 w-6 text-primary" />
          <span className="sr-only">Toolkit</span>
        </div>
        <div className="h-px bg-border" />
        <ScrollArea className="flex-auto">
          <Nav isCollapsed={true} links={links} {...props} />
        </ScrollArea>
        <div className="h-px bg-border" />
        <div className="grid gap-2">
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
      </aside>
    </TooltipProvider>
  );
};

export { Sidebar };
