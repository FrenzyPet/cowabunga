import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './text.module.scss'

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export enum TextAlign {
	LEFT = 'left',
	CENTER = 'center',
	RIGHT = 'right',
}

export enum TextSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
}

interface ITextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlign
	size?: TextSize
}

export const Text: FC<ITextProps> = ({
	className,
	text,
	title,
	theme = TextTheme.PRIMARY,
	align = TextAlign.LEFT,
	size = TextSize.M,
}) => {
	const textMods = {
		[s[theme]]: true,
		[s[align]]: true,
		[s[size]]: true,
	}

	return (
		<div className={cn(s.textWrapper, textMods, [className])}>
			{!!title && <p className={s.title}>{title}</p>}
			{!!text && <p className={s.text}>{text}</p>}
		</div>
	)
}
