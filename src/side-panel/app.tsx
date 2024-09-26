import React, { lazy, Suspense } from 'react';
import { Layout } from './layout';
import ErrorBoundary from '@/components/error/boundary';
import { LazyComponent } from './components/lazy/component';
import { EntryError } from '@/components/error/entry';

const App: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full z-20 bg-background">
      <Layout>
        <ErrorBoundary error={EntryError}>
          <LazyComponent entry="chatting" />
        </ErrorBoundary>
      </Layout>
    </div>
  );
};

export default App;
