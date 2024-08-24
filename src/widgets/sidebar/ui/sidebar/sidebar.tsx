import { FC, useState } from 'react'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import { RoutePath } from 'shared/config/route-config/route-config'
import { cn } from 'shared/lib/classnames/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'
import { Button, ButtonTheme } from 'shared/ui/button'
import { ButtonSize } from 'shared/ui/button/ui/button'
import { LangSwitcher } from 'shared/ui/lang-switcher'
import { ThemeSwitcher } from 'shared/ui/theme-switcher'

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
				<AppLink className={s.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
					<MainIcon className={s.icon} />
					<span className={s.link}>Главная</span>
				</AppLink>

				<AppLink className={s.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
					<AboutIcon className={s.icon} />
					<span className={s.link}>О сайте</span>
				</AppLink>
			</div>

			<div className={s.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	)
}
