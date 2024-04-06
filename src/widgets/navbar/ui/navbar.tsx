import { FC } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'
import { cn } from 'shared/lib/classnames/classnames'
import s from './navbar.module.scss'

interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
	return (
		<div className={cn(s.wrapper, {}, [className])}>
			<div className={s.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>
					Главная
				</AppLink>
				<AppLink to='/about'>О сайте</AppLink>
			</div>
		</div>
	)
}
