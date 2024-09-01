import type { IStoreSchema } from 'app/providers/store-provider'

export const getLoginPassword = (state: IStoreSchema) => state?.login?.password || ''
