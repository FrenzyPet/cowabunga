import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './icon.module.scss'

interface IIconProps {
	className?: string
	Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<IIconProps> = ({ className, Svg }) => {
	return <Svg className={cn(s.icon, {}, [className])} />
}
