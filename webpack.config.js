module.exports = options => {
  return {
    entry: "./frontend/index.js",
    output: {
      filename: "./frontend/bundle.js"
    },
    module: {
      rules: [
        {
          test: /frontend/.js$,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  }  
}
