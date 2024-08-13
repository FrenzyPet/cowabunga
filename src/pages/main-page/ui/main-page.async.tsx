import { lazy } from 'react'

export const MainPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-expect-error: Эта ошибка ожидается, потому что я так сделал специально
			// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
			setTimeout(() => resolve(import('./main-page')), 1500)
		}),
)
