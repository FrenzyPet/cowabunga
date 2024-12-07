import type { IStoreSchema } from 'app/providers/store-provider'

export const getProfileError = (store: IStoreSchema) => store?.profile?.error
