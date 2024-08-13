import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERT = 'backgroundInvert',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	size?: ButtonSize
	square?: boolean
}

export const Button: FC<IButtonProps> = (props) => {
	const { className, children, theme, square, size = ButtonSize.M, ...other } = props

	const mods: Record<string, boolean> = {
		[s[theme]]: true,
		[s.square]: square,
		[s[size]]: true,
	}
	return (
		<button className={cn(s.button, mods, [className])} {...other}>
			{children}
		</button>
	)
}
