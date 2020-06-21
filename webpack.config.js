const path = require('path');

module.exports = {
  entry: {
    'App': './jsx/App.jsx'  // 'App(進入點檔案編譯後要得名字)' : '進入點'
  },
  output: {
    path: path.resolve(__dirname, 'js'), // 編譯到 js 資料夾
    filename: '[name].js'               //  檔名 [name].js  將能對造上面 進入點欲求檔名
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