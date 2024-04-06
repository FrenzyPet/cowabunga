import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from 'pages/about-page'
import { MainPage } from 'pages/main-page'
import { routeConfig } from 'shared/config/route-config/route-config'

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>...Loading</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={<div className='page-wrapper'>{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	)
}
