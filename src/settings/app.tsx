import React, { useState } from 'react';
import Layout from './layout';
import ErrorBoundary from '@/components/error/boundary';
import { EntryError } from '@/components/error/entry';
import { LazyComponent } from '@/components/lazy/component';
import { SelectedItem } from '@/components/nav';

const App: React.FC = () => {
  const [selected, setSelected] = useState<SelectedItem>({ key: 'base', title: '基本配置' });

  return (
    <div className="flex overflow-hidden">
      <Layout selected={selected} onSelect={setSelected}>
        <ErrorBoundary error={EntryError}>
          <LazyComponent module="settings" entry={selected.key} />
        </ErrorBoundary>
      </Layout>
    </div>
  );
};

export default App;
