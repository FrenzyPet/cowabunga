import { ArticleDetails } from 'entities/article'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { cn } from 'shared/lib/classnames/classnames'

import s from './article-details-page.module.scss'

interface IArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
	const { id } = useParams()

	if (!id) {
		return <div className={cn(s.articleDetails, {}, [className])}>Статья не найдена</div>
	}

	return (
		<div className={cn(s.articleDetailsPage, {}, [className])}>
			<ArticleDetails id={id} />
		</div>
	)
}

export default ArticleDetailsPage
