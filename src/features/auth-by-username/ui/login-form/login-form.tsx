import { getLoginState } from 'features/auth-by-username/model/selectors/get-login-state/get-login-state'
import { loginActions } from 'features/auth-by-username/model/slice/login.slice'
import { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { Text } from 'shared/ui/text'
import { TextTheme } from 'shared/ui/text/ui/text'

import { loginByUsername } from '../../model/services/login-by-username/login-by-username'
import s from './login-form.module.scss'

interface ILoginFormProps {
	className?: string
	onClose: () => void
}

export const LoginForm: FC<ILoginFormProps> = memo(({ className, onClose }) => {
	const dispatch = useDispatch()
	const { username, password, isLoading, error } = useSelector(getLoginState)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch],
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch],
	)

	const onLoginClick = useCallback(() => {
		// @ts-expect-error
		dispatch(loginByUsername({ password, username }))
		onClose()
	}, [dispatch, onClose, password, username])

	return (
		<div className={cn(s.loginForm, {}, [className])}>
			<Text title='Форма авторизации' />

			{!!error && <Text theme={TextTheme.ERROR} text={error} />}

			<Input
				placeholder='Логин'
				className={s.input}
				type='text'
				autoFocus
				onChange={onChangeUsername}
				value={username}
			/>

			<Input placeholder='Пароль' className={s.input} type='text' onChange={onChangePassword} value={password} />

			<Button disabled={isLoading} theme={ButtonTheme.OUTLINE} className={s.loginButton} onClick={onLoginClick}>
				Войти
			</Button>
		</div>
	)
})
