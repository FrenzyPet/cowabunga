import { CSSProperties, FC, useMemo } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './avatar.module.scss'

interface IAvatarProps {
	className?: string
	src?: string
	size?: number
	alt?: string
}

export const Avatar: FC<IAvatarProps> = (props) => {
	const { alt, className, size, src } = props

	const styles = useMemo<CSSProperties>(
		() => ({
			width: size ?? 100,
			height: size ?? 100,
		}),
		[size],
	)
	return <img src={src} alt={alt} className={cn(s.avatar, {}, [className])} style={styles} />
}
