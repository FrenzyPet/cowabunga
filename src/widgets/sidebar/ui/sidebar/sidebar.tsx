import { FC, useState } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import s from './sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/theme-switcher'

interface ISidebarProps {
	className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div className={cn(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>TOGGLE</button>
			<div className={s.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
