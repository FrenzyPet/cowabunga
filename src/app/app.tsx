import { Link } from 'react-router-dom'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'
import { cn } from 'shared/lib/classnames/classnames'

import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle theme</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>О сайте</Link>
			<AppRouter />
		</div>
	)
}

export default App
