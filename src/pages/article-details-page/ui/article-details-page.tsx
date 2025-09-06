import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './article-details-page.module.scss'

interface IArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
	return <div className={cn(s.articleDetailsPage, {}, [className])}>ARTICLE DETAILS</div>
}

export default ArticleDetailsPage
