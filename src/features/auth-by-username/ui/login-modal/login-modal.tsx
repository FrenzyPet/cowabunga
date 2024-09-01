import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Modal } from 'shared/ui/modal'

import { LoginForm } from '../login-form/login-form'
import s from './login-modal.module.scss'

interface ILoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => {
	return (
		<Modal lazy isOpen={isOpen} onClose={onClose} className={cn(s.loginModal, {}, [className])}>
			<LoginForm onClose={onClose} />
		</Modal>
	)
}
