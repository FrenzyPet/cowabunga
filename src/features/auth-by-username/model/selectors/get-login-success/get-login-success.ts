import type { IStoreSchema } from 'app/providers/store-provider'

export const getLoginSuccess = (state: IStoreSchema) => state?.login?.isSuccess || false
