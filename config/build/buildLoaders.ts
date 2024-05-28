import webpack from 'webpack'

import { buildCssLoaders } from './loaders/buildCssLoaders'
import { BuildOptions } from './types/config'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const cssLoader = buildCssLoaders(options.isDev)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [fileLoader, svgLoader, typescriptLoader, cssLoader]
}
