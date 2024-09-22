const path = require('path');
const { env } = require('process');

const common = {
  entry: {
    background: './src/background/index.ts',
    popup: './src/popup/index.tsx',
    sidePanel: './src/side-panel/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
};

if (env.NODE_ENV === 'production') {
  module.exports = {
    ...common,
    mode: 'production',
  };
} else {
  module.exports = {
    ...common,
    mode: 'development',
    devtool: 'inline-source-map',
  };
}
