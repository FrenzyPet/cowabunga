import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
	const { className, children, theme, ...other } = props
	return (
		<button className={cn(s.button, {}, [className, s[theme]])} {...other}>
			{children}
		</button>
	)
}
