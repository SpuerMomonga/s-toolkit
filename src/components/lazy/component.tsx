import React, { lazy, Suspense } from 'react';

interface LazyComponentProps {
  module: string;
  entry: string;
  loading?: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = React.memo((props) => {
  const { module, entry, loading = <div>loading</div> } = props;
  const Component = lazy(() => import(`../../${module}/page/${entry}/index`));
  return (
    <Suspense fallback={loading}>
      <Component />
    </Suspense>
  );
});

export { LazyComponent };
