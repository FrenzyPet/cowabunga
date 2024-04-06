import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'
import { cn } from 'shared/lib/classnames/classnames'

import './styles/index.scss'
import { Suspense } from 'react'

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
