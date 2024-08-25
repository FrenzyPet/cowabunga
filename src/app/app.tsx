import { Suspense } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'
import './styles/index.scss'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
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
