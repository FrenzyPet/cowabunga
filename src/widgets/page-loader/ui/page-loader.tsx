import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Loader } from 'shared/ui/loader'

import s from './page-loader.module.scss'

interface IPageLoaderProps {
	className?: string
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
	return (
		<div className={cn(s.pageLoader, {}, [className])}>
			<Loader />
		</div>
	)
}
