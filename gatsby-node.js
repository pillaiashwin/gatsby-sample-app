exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  const config = getConfig();
  if (stage === "develop" || stage === "build-javascript") {
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.jsx$/,
          loader: "babel-loader"
        },
        {
          test: /\.mjs$/,
          type: "javascript/auto"
        }
      ]
    },
    resolve: {
      fallback: {
        url: require.resolve("url/"),
        stream: require.resolve("stream-browserify/"),
        process: require.resolve("process")
      },
      extensions: [".jsx"]
    }
  });
};

const axios = require('axios');
const https = require('https');
const crypto = require('crypto');

// sourceNodes skipped