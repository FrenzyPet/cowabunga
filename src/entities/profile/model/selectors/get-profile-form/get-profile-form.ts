import { IStoreSchema } from 'app/providers/store-provider'

export const getProfileForm = (store: IStoreSchema) => store.profile?.form
