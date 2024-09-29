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
interface NavProps {
  isCollapsed: boolean;
  links: LinkItem[];
  entry: string;
  onClick?: (key: string) => void;
}

const Nav: React.FC<NavProps> = (props) => {
  const { isCollapsed, links, onClick, entry } = props;

  return (
    <div data-collapsed={isCollapsed} className="flex flex-col">
      <nav className="grid gap-2 group-[[data-collapsed=true]]:justify-center">
        {links.map((link) =>
          isCollapsed ? (
            <Tooltip key={link.key}>
              <TooltipTrigger asChild>
                <Button
                  variant={entry === link.key ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => {
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
              className="justify-start"
              variant={entry === link.key ? 'default' : 'ghost'}
              onClick={() => {
                onClick?.(link.key);
              }}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span className={cn('ml-auto', entry === link.key && 'text-background dark:text-white')}>
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
