import React, { useState } from 'react';
import Layout from './layout';

const App: React.FC = () => {
  const [entry, setEntry] = useState('chatting');

  return (
    <div className="flex overflow-hidden">
      <Layout entry={entry} onClick={setEntry}>
        内容
      </Layout>
    </div>
  );
};

export default App;
