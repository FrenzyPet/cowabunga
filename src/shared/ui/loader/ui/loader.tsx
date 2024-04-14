import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import './loader.scss'

interface ILoaderProps {
	className?: string
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
	return <div className={cn('lds-hourglass', {}, [className])}></div>
}
