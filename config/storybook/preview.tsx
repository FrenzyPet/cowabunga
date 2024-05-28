import type { Preview } from '@storybook/react'
import 'app/styles/index.scss'

const preview: Preview = {
	decorators: [(Story) => <div className='app light'>{Story()}</div>],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
