import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'
import { Navbar } from 'widgets/navbar'
import { cn } from 'shared/lib/classnames/classnames'

import './styles/index.scss'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
