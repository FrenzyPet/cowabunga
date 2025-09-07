import { IArticleImageBlock } from 'entities/article/model/types/article'
import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Text, TextAlign } from 'shared/ui/text'

import s from './article-image-block-component.module.scss'

interface IArticleImageBlockComponentProps {
	className?: string
	block: IArticleImageBlock
}

export const ArticleImageBlockComponent: FC<IArticleImageBlockComponentProps> = (props) => {
	const { className, block } = props
	return (
		<div className={cn(s.articleImageBlockComponent, {}, [className])}>
			<img className={s.image} src={block.src} alt={block.title} />

			{block.title && <Text text={block.title} align={TextAlign.CENTER} />}
		</div>
	)
}
