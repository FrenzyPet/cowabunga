import { getUserAuthData } from 'entities/user'
import { FC, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route-config/route-config'
import { PageLoader } from 'widgets/page-loader'

export const AppRouter: FC = () => {
	const isAuth = useSelector(getUserAuthData)

	const routes = useMemo(() => {
		return Object.values(routeConfig).filter((route) => {
			if (route.authOnly && !isAuth) {
				return false
			}

			return true
		})
	}, [isAuth])

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ path, element }) => (
					<Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
				))}
			</Routes>
		</Suspense>
	)
}
