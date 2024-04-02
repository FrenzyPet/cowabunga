import { Route, Routes, Link } from 'react-router-dom'

import { AboutPageAsync } from './pages/about-page/about-page.async'
import { MainPageAsync } from './pages/main-page/main-page.async'
import { Suspense } from 'react'

const App = () => {
	return (
		<div className='app'>
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
