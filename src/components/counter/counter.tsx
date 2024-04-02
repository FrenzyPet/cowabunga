import { FC, useState } from 'react'

import './counter.scss'

const Counter: FC = () => {
	const [count, setCount] = useState<number>(0)
	return (
		<div>
			<div>{count}</div>
			<button className='button' onClick={() => setCount(prev => prev + 1)}>
				+
			</button>
		</div>
	)
}

export default Counter
