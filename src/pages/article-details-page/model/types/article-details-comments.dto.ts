import { IComment } from 'entities/comment'

export interface IArticleDetailsCommentsSchema {
	isLoading?: boolean
	error?: string
	data?: IComment[]
}
