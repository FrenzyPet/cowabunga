import { loginActions, loginReducer } from 'features/auth-by-username/model/slice/login.slice'
import { FC, memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/dynamic-module-loader/dynamic-module-loader'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { Text } from 'shared/ui/text'
import { TextTheme } from 'shared/ui/text/ui/text'

import { getLoginError } from '../../model/selectors/get-login-error/get-login-error'
import { getLoginLoading } from '../../model/selectors/get-login-loading/get-login-loading'
import { getLoginPassword } from '../../model/selectors/get-login-password/get-login-password'
import { getLoginSuccess } from '../../model/selectors/get-login-success/get-login-success'
import { getLoginUsername } from '../../model/selectors/get-login-username/get-login-username'
import { loginByUsername } from '../../model/services/login-by-username/login-by-username'
import s from './login-form.module.scss'

export interface ILoginFormProps {
	className?: string
	onClose: () => void
}

const initialReducers: ReducersList = {
	login: loginReducer,
}

const LoginForm: FC<ILoginFormProps> = ({ className, onClose }) => {
	const dispatch = useDispatch()

	const username = useSelector(getLoginUsername)
	const isSuccess = useSelector(getLoginSuccess)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginLoading)
	const error = useSelector(getLoginError)

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
	}, [dispatch, password, username])

	useEffect(() => {
		if (isSuccess) {
			onClose()
		}

		return () => {
			dispatch(loginActions.clearSuccess())
		}
	}, [dispatch, isSuccess, onClose])

	return (
		<DynamicModuleLoader reducers={initialReducers}>
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
		</DynamicModuleLoader>
	)
}

export default memo(LoginForm)
