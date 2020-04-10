const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  output: {
    path: path.resolve(__dirname, 'source/'),
    filename: 'app.js',    
  },
  entry: {
    main: './dev/js/index.js'
  },
  devServer: {
      port:5000
  },
  module:{
    rules: [
        {
            test: /.pug$/,
            use: ['pug-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: 
          [
            {loader: MiniCssExtractPlugin.loader},
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
            ],
        },
      ],
  },
  plugins: [
    new  HtmlWebpackPlugin({
        template: path.resolve('./dev/Pug', 'index.pug')
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.css'
    })
  ],
}