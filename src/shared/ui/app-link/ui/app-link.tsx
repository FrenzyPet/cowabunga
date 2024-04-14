import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { cn } from 'shared/lib/classnames/classnames'

import s from './app-link.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
	const { to, className, children, theme = AppLinkTheme.PRIMARY, ...other } = props
	return (
		<Link to={to} className={cn(s.appLink, {}, [className, s[theme]])} {...other}>
			{children}
		</Link>
	)
}
