import { FC, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shared/config/route-config/route-config'
import { PageLoader } from 'widgets/page-loader'

import { RequireAuth } from './require-auth'

export const AppRouter: FC = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const { path, element, authOnly } = route
		return (
			<Route
				key={path}
				path={path}
				element={<div className='page-wrapper'>{authOnly ? <RequireAuth>{element}</RequireAuth> : element}</div>}
			/>
		)
	}, [])

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</Suspense>
	)
}
