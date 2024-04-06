import { FC } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'
import { cn } from 'shared/lib/classnames/classnames'
import s from './navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/theme-switcher'

interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
	return (
		<div className={cn(s.wrapper, {}, [className])}>
			<ThemeSwitcher />
			<div className={s.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
					О сайте
				</AppLink>
			</div>
		</div>
	)
}
