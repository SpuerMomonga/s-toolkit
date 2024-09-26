import React, { useState } from 'react';
import { Layout } from './layout';
import ErrorBoundary from '@/components/error/boundary';
import { LazyComponent } from './components/lazy/component';
import { EntryError } from '@/components/error/entry';

const App: React.FC = () => {
  const [entry, setEntry] = useState('chatting');

  return (
    <div className="fixed top-0 left-0 h-full w-full z-20 bg-background">
      <Layout entry={entry} onClick={setEntry}>
        <ErrorBoundary error={EntryError}>
          <LazyComponent entry={entry} />
        </ErrorBoundary>
      </Layout>
    </div>
  );
};

export default App;
