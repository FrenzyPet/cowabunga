import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'
import { cn } from 'shared/lib/classnames/classnames'

import './styles/index.scss'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App
