import { Button } from '@/components/ui/button';
import { CircleHelp, Heart, Info } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import React from 'react';
import url from '@/constants/url';

const Footer: React.FC = () => {
  return (
    <div className="h-7 flex flex-row justify-between px-4 items-center">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="p-0 h-4 w-4 text-xs">
              <Info className="h-4 w-4" />
              <span className="sr-only">关于</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-4">关于</TooltipContent>
        </Tooltip>
        <div className="flex flex-row gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" onClick={() => window.open(url.sToolkit)} className="p-0 h-4 w-4 text-xs">
                <Heart className="h-4 w-4" />
                <span className="sr-only">求Star</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="flex items-center gap-4">求Star</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                onClick={() => {
                  window.open(url.issues);
                }}
                className="p-0 h-4 w-4 text-xs"
              >
                <CircleHelp className="h-4 w-4" />
                <span className="sr-only">Issues</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="flex items-center gap-4">Issues</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export { Footer };
