import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

interface AvatarMenubarProps {
  children?: React.ReactNode;
}

const AvatarMenubar: React.FC<AvatarMenubarProps> = ({ children }) => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{children}</MenubarTrigger>
        <MenubarContent collisionPadding={{ right: 10, left: 10 }}>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export { AvatarMenubar };
