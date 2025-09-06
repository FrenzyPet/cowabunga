import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './articles-page.module.scss'

interface IArticlesPageProps {
	className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = ({ className }) => {
	return <div className={cn(s.articlesPage, {}, [className])}>ARTICLES</div>
}

export default ArticlesPage
