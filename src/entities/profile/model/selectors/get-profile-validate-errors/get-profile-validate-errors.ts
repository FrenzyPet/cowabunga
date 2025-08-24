import type { IStoreSchema } from 'app/providers/store-provider'

export const getProfileValidateErrors = (store: IStoreSchema) => store?.profile?.validateErrors
