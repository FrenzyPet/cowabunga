import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] => {
	const plugins = [
		new webpack.ProgressPlugin(),

		new HTMLWebpackPlugin({
			template: paths.html,
		}),

		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),

		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
		}),
	]

	if (isDev) {
		plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
	}

	return plugins
}
