import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { MainPage } from 'pages/main-page'
import { AboutPage } from 'pages/about-page'
import { useTheme } from './providers/theme-provider'

import './styles/index.scss'
import { cn } from 'shared/lib/classnames/classnames'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle theme</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>О сайте</Link>
			<Suspense fallback={<div>...Loading</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
