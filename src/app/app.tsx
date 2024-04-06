import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'
import { Navbar } from 'widgets/navbar'
import { cn } from 'shared/lib/classnames/classnames'

import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>toggle theme</button>
		</div>
	)
}

export default App
