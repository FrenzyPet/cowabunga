import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './not-found-page.module.scss'

interface INotFoundPageProps {
	className?: string
}

export const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
	return <div className={cn(s.notFoundPage, {}, [className])}>Страница не найдена</div>
}
