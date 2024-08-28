import { LoginModal } from 'features/auth-by-username'
import { FC, useCallback, useState } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'

import s from './navbar.module.scss'

interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
	const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)

	const onCloseModal = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])

	return (
		<div className={cn(s.wrapper, {}, [className])}>
			<Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERT} className={s.links}>
				Войти
			</Button>

			<LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
		</div>
	)
}
