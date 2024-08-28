import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import s from './login-form.module.scss'

interface ILoginFormProps {
	className?: string
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
	return (
		<div className={cn(s.loginForm, {}, [className])}>
			<Input placeholder='Логин' className={s.input} type='text' autoFocus />
			<Input placeholder='Пароль' className={s.input} type='text' />
			<Button className={s.loginButton}>Войти</Button>
		</div>
	)
}
