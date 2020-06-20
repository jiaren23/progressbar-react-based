const path = require('path');

module.exports = {
  entry: './jsx/main.jsx',
  output: {
    path: path.resolve(__dirname, 'js'), // 編譯到 js 資料夾
    filename: 'main.js'                  //  檔名 main.js
  },
  mode: "production",
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        } 
      }
    ]
  }
};