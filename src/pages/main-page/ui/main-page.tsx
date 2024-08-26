import { Counter } from 'entities/counter'
import { FC } from 'react'

import s from './main-page.module.scss'

const MainPage: FC = () => {
	return (
		<div className={s.wrapper}>
			<div>Main page</div>
			<Counter />
		</div>
	)
}

export default MainPage
