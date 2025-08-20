import { IStoreSchema } from 'app/providers/store-provider'

export const getProfileReadonly = (store: IStoreSchema) => store.profile?.readonly
