import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-14 flex flex-col p-2 border border-l-accent">
      <div className="border-b-accent">logo</div>
      <div className="flex-auto">icon</div>
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
