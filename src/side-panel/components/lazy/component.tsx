import React, { lazy, Suspense } from 'react';

interface LazyComponentProps {
  entry: string;
  loading?: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = React.memo((props) => {
  const { entry, loading = <div>loading</div> } = props;
  const Component = lazy(() => import(`../../page/${entry}/index`));
  return (
    <Suspense fallback={loading}>
      <Component />
    </Suspense>
  );
});

export { LazyComponent };
