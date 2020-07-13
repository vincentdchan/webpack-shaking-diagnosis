const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  // mode: 'development',
  plugins: [
    // new webpack.DefinePlugin({
    //   'location': 'myLocation',
    //   'window.location': 'myWindow',
    // }),
    new WebpackDeepScopeAnalysisPlugin(),
  ],
  devtool: 'none',
  optimization: {
		usedExports: true,
		concatenateModules: true, occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	},
};

