import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type LinkItem = {
  key: string;
  title: string;
  label?: string;
  icon: LucideIcon;
  disabled?: boolean;
};
interface NavProps {
  isCollapsed: boolean;
  links: LinkItem[];
  defaultActiveKey?: string;
  onClick?: (key: string) => void;
}

const Nav: React.FC<NavProps> = (props) => {
  const { isCollapsed, links, onClick, defaultActiveKey } = props;
  const [activeKey, setActiveKey] = useState(defaultActiveKey ?? links[0].key);

  return (
    <div data-collapsed={isCollapsed} className="flex flex-col py-2">
      <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center">
        {links.map((link) =>
          isCollapsed ? (
            <Tooltip key={link.key} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant={activeKey === link.key ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => {
                    setActiveKey(link.key);
                    onClick?.(link.key);
                  }}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && <span className="ml-auto text-muted-foreground">{link.label}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={link.key}
              variant={activeKey === link.key ? 'default' : 'ghost'}
              onClick={() => {
                setActiveKey(link.key);
                onClick?.(link.key);
              }}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span className={cn('ml-auto', activeKey === link.key && 'text-background dark:text-white')}>
                  {link.label}
                </span>
              )}
            </Button>
          ),
        )}
      </nav>
    </div>
  );
};

export { Nav, type LinkItem };
