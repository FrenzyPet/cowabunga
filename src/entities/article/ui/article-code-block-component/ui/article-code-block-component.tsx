import { IArticleCodeBlock } from 'entities/article/model/types/article'
import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Code } from 'shared/ui/code'

import s from './article-code-block-component.module.scss'

interface IArticleCodeBlockComponentProps {
	className?: string
	block: IArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<IArticleCodeBlockComponentProps> = (props) => {
	const { className, block } = props
	return (
		<div className={cn(s.articleCodeBlockComponent, {}, [className])}>
			<Code text={block.code} />
		</div>
	)
}
