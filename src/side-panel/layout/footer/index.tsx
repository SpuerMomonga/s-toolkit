import { Button } from '@/components/ui/button';
import { CircleHelp } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="h-7 flex flex-row justify-between px-4 items-center">
      <Button variant="ghost" className="p-0 h-4 w-4 text-xs">
        <CircleHelp className="h-4 w-4" />
      </Button>
      <Button
        variant="link"
        className="p-0 h-4"
        onClick={() => {
          window.open('https://github.com/SpuerMomonga');
        }}
      >
        © 2024 SM
      </Button>
    </div>
  );
};

export { Footer };
