import { IArticleTextBlock } from 'entities/article/model/types/article'
import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Text } from 'shared/ui/text'

import s from './article-text-block-component.module.scss'

interface IArticleTextBlockComponentProps {
	className?: string
	block: IArticleTextBlock
}

export const ArticleTextBlockComponent: FC<IArticleTextBlockComponentProps> = (props) => {
	const { className, block } = props
	return (
		<div className={cn(s.articleTextBlockComponent, {}, [className])}>
			{block.title && <Text title={block.title} className={s.title} />}

			<div className={s.content}>
				{block.paragraphs.map((el) => (
					<Text key={el} text={el} className={s.paragraph} />
				))}
			</div>
		</div>
	)
}
