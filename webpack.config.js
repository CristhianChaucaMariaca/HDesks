const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/'),
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
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          // use: 'file-loader',
          // include: path.join(__dirname, 'dev')
          use:
            {
              loader: 'file-loader',
              options: {
                name: "[path][name].[ext]",
                outputPath: "imgs"
              }
            },
        }
      ],
  },
  // resolve: {
  //   alias:{
  //     'images': path.resolve(__dirname, 'dev/assets')
  //   }
  // },
  plugins: [
    new  HtmlWebpackPlugin({
        template: path.resolve('./dev/Pug', 'index.pug')
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.css'
    })
  ],
}