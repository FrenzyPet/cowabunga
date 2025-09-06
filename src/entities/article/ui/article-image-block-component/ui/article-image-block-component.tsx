import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'

import s from './article-image-block-component.module.scss'

interface IArticleImageBlockComponentProps {
	className?: string
}

export const ArticleImageBlockComponent: FC<IArticleImageBlockComponentProps> = ({ className }) => {
	return <div className={cn(s.articleImageBlockComponent, {}, [className])}>IMAGE BLOCK</div>
}
