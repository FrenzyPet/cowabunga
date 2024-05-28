import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './sidebar'

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {
	args: {},
}
