import type { IStoreSchema } from 'app/providers/store-provider/config/store.dto'

export const getCounter = (state: IStoreSchema) => state.counter
