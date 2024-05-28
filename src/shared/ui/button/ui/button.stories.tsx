import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import '../../../../app/styles/index.scss'
import { Button, ButtonTheme } from './button'

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
	argTypes: {},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Text',
	},
}

export const Clear: Story = {
	args: {
		children: 'Text 2',
		theme: ButtonTheme.CLEAR,
	},
}

export const Outline: Story = {
	args: {
		children: 'Text 3',
		theme: ButtonTheme.OUTLINE,
	},
}
