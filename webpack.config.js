const path = require('path');

module.exports = {
  entry: './jsx/main.jsx',
  output: {
    path: path.resolve(__dirname, 'js'), // 編譯到 js 資料夾
    filename: 'main.js'                  //  檔名 main.js
  },
  mode: "development",
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'], // 這串外掛for 箭頭函式 (babel 預設不支援轉換箭頭函式)
          }
        } 
      }
    ]
  }
};