import React, { useState } from 'react';
import Layout from './layout';
import ErrorBoundary from '@/components/error/boundary';
import { EntryError } from '@/components/error/entry';
import { LazyComponent } from '@/components/lazy/component';

const App: React.FC = () => {
  const [entry, setEntry] = useState('base');

  return (
    <div className="flex overflow-hidden">
      <Layout entry={entry} onClick={setEntry}>
        <ErrorBoundary error={EntryError}>
          <LazyComponent module="settings" entry={entry} />
        </ErrorBoundary>
      </Layout>
    </div>
  );
};

export default App;
