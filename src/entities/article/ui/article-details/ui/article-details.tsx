import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsLoading,
} from 'entities/article/model/selectors/article-details'
import { fetchArticleById } from 'entities/article/model/services/fetch-article-by-id/fetch-article-by-id'
import { ArticleBlockType, IArticleBlock } from 'entities/article/model/types/article'
import { FC, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { cn } from 'shared/lib/classnames/classnames'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/dynamic-module-loader/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { Avatar } from 'shared/ui/avatar'
import { Icon } from 'shared/ui/icon'
import { Skeleton } from 'shared/ui/skeleton'
import { Text, TextAlign, TextSize } from 'shared/ui/text'

import { articleDetailsReducer } from '../../../model/slice/article-details.slice'
import { ArticleCodeBlockComponent } from '../../article-code-block-component'
import { ArticleImageBlockComponent } from '../../article-image-block-component'
import { ArticleTextBlockComponent } from '../../article-text-block-component'
import s from './article-details.module.scss'

interface IArticleDetailsProps {
	className?: string
	id: string
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<IArticleDetailsProps> = ({ className, id }) => {
	const dispatch = useAppDispatch()

	const isLoading = useSelector(getArticleDetailsLoading)
	const error = useSelector(getArticleDetailsError)
	const article = useSelector(getArticleDetailsData)

	const renderBlock = useCallback((block: IArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.CODE:
				return <ArticleCodeBlockComponent key={block.id} block={block} />

			case ArticleBlockType.IMAGE:
				return <ArticleImageBlockComponent key={block.id} block={block} />

			case ArticleBlockType.TEXT:
				return <ArticleTextBlockComponent key={block.id} block={block} />

			default:
				return null
		}
	}, [])

	useEffect(() => {
		// @ts-expect-error
		dispatch(fetchArticleById(id))
	}, [dispatch, id])

	let content

	if (isLoading) {
		content = (
			<>
				<Skeleton className={s.avatar} height={200} width={200} radius='50%' />
				<Skeleton className={s.title} height={32} width={300} />
				<Skeleton className={s.skeleton} height={24} width={600} />
				<Skeleton className={s.skeleton} height={200} width='100%' />
				<Skeleton className={s.skeleton} height={200} width='100%' />
			</>
		)
	}

	if (error) {
		content = <Text align={TextAlign.CENTER} title='Произошла ошибка при загрузке статьи' />
	} else if (!isLoading) {
		content = (
			<>
				<div className={s.avatarWrapper}>
					<Avatar size={200} src={article?.img} className={s.avatar} />
				</div>

				<Text className={s.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />

				<div className={s.articleInfo}>
					<Icon Svg={EyeIcon} />
					<Text text={String(article?.views)} />
				</div>

				<div className={s.articleInfo}>
					<Icon Svg={CalendarIcon} />
					<Text text={article?.createdAt} />
				</div>

				<div className={s.blocks}>{article?.blocks.map(renderBlock)}</div>
			</>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(s.articleDetails, {}, [className])}>{content}</div>
		</DynamicModuleLoader>
	)
}
