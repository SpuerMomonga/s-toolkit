import React from 'react';
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

type SelectedItem = { key: string; title: string; label?: string };

interface NavProps {
  isCollapsed: boolean;
  links: LinkItem[];
  selectedKey: string;
  onSelect?: (select: SelectedItem) => void;
}

const Nav: React.FC<NavProps> = (props) => {
  const { isCollapsed, links, onSelect, selectedKey } = props;

  return (
    <div data-collapsed={isCollapsed} className="flex flex-col">
      <nav className="grid gap-2 group-[[data-collapsed=true]]:justify-center">
        {links.map(({ key, title, label, ...link }) =>
          isCollapsed ? (
            <Tooltip key={key}>
              <TooltipTrigger asChild>
                <Button
                  variant={selectedKey === key ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => {
                    onSelect?.({ key, title, label });
                  }}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {title}
                {label && <span className="ml-auto text-muted-foreground">{label}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={key}
              className="justify-start"
              variant={selectedKey === key ? 'default' : 'ghost'}
              onClick={() => {
                onSelect?.({ key, title, label });
              }}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {title}
              {label && (
                <span className={cn('ml-auto', selectedKey === key && 'text-background dark:text-white')}>{label}</span>
              )}
            </Button>
          ),
        )}
      </nav>
    </div>
  );
};

export { Nav, type LinkItem, type SelectedItem };
