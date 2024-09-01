import type { IStoreSchema } from 'app/providers/store-provider'

export const getLoginLoading = (state: IStoreSchema) => state?.login?.isLoading || false
