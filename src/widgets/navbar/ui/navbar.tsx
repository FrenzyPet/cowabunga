import { getUserAuthData, userActions } from 'entities/user'
import { LoginModal } from 'features/auth-by-username'
import { FC, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'

import s from './navbar.module.scss'

interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
	const dispatch = useDispatch()
	const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)

	const authData = useSelector(getUserAuthData)

	const onCloseModal = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	return (
		<div className={cn(s.wrapper, {}, [className])}>
			<Button onClick={authData ? onLogout : onShowModal} theme={ButtonTheme.CLEAR_INVERT} className={s.links}>
				{authData ? 'Выйти' : 'Войти'}
			</Button>

			<LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
		</div>
	)
}
