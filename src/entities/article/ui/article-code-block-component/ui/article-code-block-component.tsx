import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './article-code-block-component.module.scss'

interface IArticleCodeBlockComponentProps {
	className?: string
}

export const ArticleCodeBlockComponent: FC<IArticleCodeBlockComponentProps> = ({ className }) => {
	return <div className={cn(s.articleCodeBlockComponent, {}, [className])}>CODE BLOCK</div>
}
