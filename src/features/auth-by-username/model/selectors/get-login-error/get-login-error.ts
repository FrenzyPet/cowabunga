import type { IStoreSchema } from 'app/providers/store-provider'

export const getLoginError = (state: IStoreSchema) => state?.login?.error || ''
