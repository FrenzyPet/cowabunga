import { FC, Suspense } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Loader } from 'shared/ui/loader'
import { Modal } from 'shared/ui/modal'

import { LoginFormAsync } from '../login-form/login-form.async'
import s from './login-modal.module.scss'

interface ILoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => {
	return (
		<Modal lazy isOpen={isOpen} onClose={onClose} className={cn(s.loginModal, {}, [className])}>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync onClose={onClose} />
			</Suspense>
		</Modal>
	)
}
