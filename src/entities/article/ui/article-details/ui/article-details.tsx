import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsLoading,
} from 'entities/article/model/selectors/article-details'
import { fetchArticleById } from 'entities/article/model/services/fetch-article-by-id/fetch-article-by-id'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/dynamic-module-loader/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { Skeleton } from 'shared/ui/skeleton'
import { Text } from 'shared/ui/text'
import { TextAlign } from 'shared/ui/text/ui/text'

import { articleDetailsReducer } from '../../../model/slice/article-details.slice'
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

	useEffect(() => {
		// @ts-expect-error
		dispatch(fetchArticleById(id))
	}, [dispatch, id])

	let content

	if (isLoading) {
		content = (
			<div>
				<Skeleton className={s.avatar} height={200} width={200} radius='50%' />
				<Skeleton className={s.title} height={32} width={300} />
				<Skeleton className={s.skeleton} height={24} width={600} />
				<Skeleton className={s.skeleton} height={200} width='100%' />
				<Skeleton className={s.skeleton} height={200} width='100%' />
			</div>
		)
	}

	if (error) {
		content = <Text align={TextAlign.CENTER} title='Произошла ошибка при загрузке статьи' />
	} else if (!isLoading) {
		content = <div>CONTENT</div>
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(s.articleDetails, {}, [className])}>{content}</div>
		</DynamicModuleLoader>
	)
}
