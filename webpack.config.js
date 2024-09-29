const path = require('path');
const { env } = require('process');
const TerserPlugin = require('terser-webpack-plugin');

const common = {
  entry: {
    background: './src/background/index.ts',
    // popup: './src/popup/index.tsx',
    sidePanel: './src/side-panel/index.tsx',
    settings: './src/settings/index.tsx',
  },
  performance: {
    maxAssetSize: 512 * 1024, // 设置资产大小上限为 512 KiB
    maxEntrypointSize: 512 * 1024, // 设置入口点大小上限为 512 KiB
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    chunkFilename: 'assets/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // 将样式添加到DOM中
          'css-loader', // 解析CSS
          'postcss-loader', // 使用PostCSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
};

if (env.NODE_ENV.trim() === 'production') {
  module.exports = {
    ...common,
    optimization,
    mode: 'production',
  };
} else {
  module.exports = {
    ...common,
    // mode: 'production',
    mode: 'development',
    devtool: 'inline-source-map',
  };
}
