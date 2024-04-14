import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from 'shared/lib/classnames/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'

import s from './navbar.module.scss'

interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<div className={cn(s.wrapper, {}, [className])}>
			<div className={s.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	)
}
