module.exports = {
  cache: true,
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js',
    // path: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack's output. devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.tsx', '.ts', '.js']
  },

  module: {
    rules: [// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        // loader: 'ts-loader', options: {     transpileOnly: true }
        use: [
          {
            loader: 'babel-loader'
          }, {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },

  // Other options...
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
};
