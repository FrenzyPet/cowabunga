import { CSSProperties, FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './skeleton.module.scss'

interface ISkeletonProps {
	className?: string
	height?: string | number
	width?: string | number
	radius?: string | number
}

export const Skeleton: FC<ISkeletonProps> = (props) => {
	const { className, height, radius, width } = props

	const styles: CSSProperties = {
		width,
		height,
		borderRadius: radius,
	}

	return <div className={cn(s.skeleton, {}, [className])} style={styles} />
}
