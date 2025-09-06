import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './article-text-block-component.module.scss'

interface IArticleTextBlockComponentProps {
	className?: string
}

export const ArticleTextBlockComponent: FC<IArticleTextBlockComponentProps> = ({ className }) => {
	return <div className={cn(s.articleTextBlockComponent, {}, [className])}>TEXT BLOCK</div>
}
