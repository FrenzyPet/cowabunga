import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Avatar } from 'shared/ui/avatar'
import { Skeleton } from 'shared/ui/skeleton'
import { Text } from 'shared/ui/text'

import type { IComment } from '../../../model/types/comment.dto'
import s from './comment-card.module.scss'

interface ICommentCardProps {
	className?: string
	comment: IComment
	isLoading?: boolean
}

export const CommentCard: FC<ICommentCardProps> = (props) => {
	const { className, comment, isLoading } = props

	if (isLoading) {
		return <Skeleton height={100} radius={5} />
	}

	return (
		<div className={cn(s.commentCard, {}, [className])}>
			<div className={s.header}>
				{!!comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
				<Text title={comment.user.username} />
			</div>

			<Text text={comment.text} />
		</div>
	)
}
