import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './navbar.module.scss'

interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
	return (
		<div className={cn(s.wrapper, {}, [className])}>
			<div className={s.links}></div>
		</div>
	)
}
