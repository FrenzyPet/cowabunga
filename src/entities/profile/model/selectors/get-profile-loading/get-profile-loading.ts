import type { IStoreSchema } from 'app/providers/store-provider'

export const getProfileLoading = (store: IStoreSchema) => store?.profile?.isLoading
