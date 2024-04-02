import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { AboutPageAsync } from './pages/about-page/about-page.async'
import { MainPageAsync } from './pages/main-page/main-page.async'
import { useTheme } from './theme/use-theme'
import { cn } from './helpers/classnames/classnames'

import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle theme</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>О сайте</Link>
			<Suspense fallback={<div>...Loading</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
