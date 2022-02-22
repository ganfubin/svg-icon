const path = require('path');
const resolve = p => path.resolve(__dirname, p);

module.exports = {
  entry: resolve('src/index.ts'),
  externals: {
    cheerio: "window",
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom"
    }
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        include: [resolve('src/icon')],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: ['fill'],
                    preserveCurrentColor: true
                  }
                }
              ]
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: `index.js`,
    library: 'bizseer-svg-icon',
    path: resolve('lib'),
    libraryTarget: "umd",
    globalObject: "this"
  }
}
