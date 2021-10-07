const path = require('path');

module.exports = {
    transpileDependencies: ['d3-scale', 'd3-array', 'cash-dom'],
    devServer: {
        port: 18000,
    },

    pwa: {
        name: 'Iskaypet Project',
        short_name: 'Iskaypet',
        start_url: '.',
        themeColor: '#639605',
        msTileColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            background_color: '#639605',
            start_url: '.',
        },
        workboxOptions: {
            exclude: [
                /\.map$/,
                /^manifest.*\.js(?:on)?$/,
                /\.js$/,
                /\.css$/,
                /\.html$/,
            ],
            skipWaiting: true,
        },
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            msTileImage: 'img/icons/msapplication-icon-144x144.png',
        },
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, 'src/styles/utilities.scss')],
        },
    },

    chainWebpack(config) {
        config.resolve
            .plugin('tsconfig-paths')
            .use(require('tsconfig-paths-webpack-plugin'));
    },
};
