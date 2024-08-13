import { lazy } from 'react'

export const AboutPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-expect-error: Эта ошибка ожидается, потому что я так сделал специально
			// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
			setTimeout(() => resolve(import('./about-page')), 1500)
		}),
)
