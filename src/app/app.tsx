import { userActions } from 'entities/user'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'
import './styles/index.scss'

const App = () => {
	useTheme()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAutDate())
	}, [dispatch])

	return (
		<div className={cn('app', {}, [])}>
			<Suspense fallback=''>
				<Navbar />

				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
