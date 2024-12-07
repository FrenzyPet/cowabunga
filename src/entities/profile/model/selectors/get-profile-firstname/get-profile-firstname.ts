import type { IStoreSchema } from 'app/providers/store-provider'

export const getProfileFirstName = (store: IStoreSchema) => store?.profile?.data?.first || ''
