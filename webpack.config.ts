import type { Configuration } from 'webpack';
import { resolve as resolvePath } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: resolvePath(__dirname, 'assets')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                    'tailwindcss'
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}

export default config;