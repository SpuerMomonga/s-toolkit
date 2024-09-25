import React from 'react';
import { Layout } from './layout';

const App: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full z-20 bg-background">
      <Layout></Layout>
    </div>
  );
};

export default App;
