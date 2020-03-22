const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devtool: argv.mode === 'development'
            ? 'cheap-module-source-map'
            : false,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    resolve: {
                        extensions: ['.js', '.jsx']
                    },
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            ['@babel/plugin-transform-react-jsx', {
                                'pragma': 'h',
                                'pragmaFrag': 'Fragment',
                            }],
                            ['@babel/plugin-proposal-class-properties']
                        ]
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                inject: 'head'
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 8080
        }
    }
};
