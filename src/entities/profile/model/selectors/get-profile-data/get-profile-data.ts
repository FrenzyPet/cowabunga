import { IStoreSchema } from 'app/providers/store-provider'

export const getProfileData = (store: IStoreSchema) => store.profile?.data
