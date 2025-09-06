import type { IStoreSchema } from 'app/providers/store-provider'

export const getArticleDetailsData = (store: IStoreSchema) => store.articleDetails?.data
export const getArticleDetailsLoading = (store: IStoreSchema) => store.articleDetails?.isLoading
export const getArticleDetailsError = (store: IStoreSchema) => store.articleDetails?.error
