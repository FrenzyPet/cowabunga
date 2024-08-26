import type { StoreSchema } from 'app/providers/store-provider/config/store.dto'

export const getCounter = (state: StoreSchema) => state.counter
