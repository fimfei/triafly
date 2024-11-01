const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'triafly',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Вставляет стили в DOM
                    'css-loader'    // Обрабатывает импорт CSS
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    }
};