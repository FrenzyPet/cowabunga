import type { IStoreSchema } from 'app/providers/store-provider'

export const getLoginUsername = (state: IStoreSchema) => state?.login?.username || ''
