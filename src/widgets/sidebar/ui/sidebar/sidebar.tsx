import { FC, useState } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'
import { ButtonSize } from 'shared/ui/button/ui/button'
import { LangSwitcher } from 'shared/ui/lang-switcher'
import { ThemeSwitcher } from 'shared/ui/theme-switcher'
import { SidebarItemsList } from 'widgets/sidebar/model/items'

import SidebarItem from '../sidebar-item/sidebar-item'
import s from './sidebar.module.scss'

interface ISidebarProps {
	className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div data-testid='sidebar' className={cn(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={s.collapseButton}
				theme={ButtonTheme.BACKGROUND_INVERT}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>

			<div className={s.items}>
				{SidebarItemsList.map((item) => (
					<SidebarItem key={item.path} item={item} collapsed={collapsed} />
				))}
			</div>

			<div className={s.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	)
}
