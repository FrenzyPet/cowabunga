import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export const buildWebpackConfig = (
	options: BuildOptions
): webpack.Configuration => ({
	mode: options.mode,

	entry: options.paths.entry,

	output: {
		filename: '[name].[contenthash].js',
		path: options.paths.build,
		clean: true,
	},

	devtool: options.isDev ? 'inline-source-map' : undefined,

	plugins: buildPlugins(options),

	module: {
		rules: buildLoaders(),
	},

	resolve: buildResolvers(),

	devServer: options.isDev ? buildDevServer(options) : undefined,
})
