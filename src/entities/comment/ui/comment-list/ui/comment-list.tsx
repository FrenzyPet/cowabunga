import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Text } from 'shared/ui/text'

import type { IComment } from '../../../model/types/comment.dto'
import { CommentCard } from '../../comment-card'
import s from './comment-list.module.scss'

interface ICommentListProps {
	className?: string
	comments?: IComment[]
	isLoading?: boolean
}

export const CommentList: FC<ICommentListProps> = (props) => {
	const { className, comments, isLoading } = props

	return (
		<div className={cn(s.commentList, {}, [className])}>
			{!!comments?.length && (
				<div className={s.comments}>
					{comments.map((comment) => (
						<CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
					))}
				</div>
			)}

			{!comments?.length && <Text text='Комментарии отсутствуют' />}
		</div>
	)
}
