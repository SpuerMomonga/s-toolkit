import React, { useState } from 'react';
import { Layout } from './layout';
import ErrorBoundary from '@/components/error/boundary';
import { EntryError } from '@/components/error/entry';
import { LazyComponent } from '@/components/lazy/component';
import { SelectedItem } from '@/components/nav';

const App: React.FC = () => {
  const [selected, setSelected] = useState<SelectedItem>({ key: 'chatting', title: '聊天' });

  return (
    <div className="fixed top-0 left-0 h-full w-full z-20 bg-background">
      <Layout selected={selected} onSelect={setSelected}>
        <ErrorBoundary error={EntryError}>
          <LazyComponent module="side-panel" entry={selected.key} />
        </ErrorBoundary>
      </Layout>
    </div>
  );
};

export default App;
