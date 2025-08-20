import { ButtonHTMLAttributes, FC } from 'react'
import { Mods, cn } from 'shared/lib/classnames/classnames'

import s from './button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERT = 'clearInvert',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
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
	disabled?: boolean
}

export const Button: FC<IButtonProps> = (props) => {
	const { className, children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled, ...other } = props

	const mods: Mods = {
		[s[theme]]: true,
		[s.square]: square,
		[s[size]]: true,
		[s.disabled]: disabled,
	}
	return (
		<button disabled={disabled} className={cn(s.button, mods, [className])} {...other}>
			{children}
		</button>
	)
}
