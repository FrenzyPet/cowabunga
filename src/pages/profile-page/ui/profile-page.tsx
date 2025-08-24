import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import {
	ProfileCard,
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	profileReducer,
} from 'entities/profile'
import { FC, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/dynamic-module-loader/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { Text } from 'shared/ui/text'
import { TextTheme } from 'shared/ui/text/ui/text'

import ProfilePageHeader from './profile-page-header/profile-page-header'
import s from './profile-page.module.scss'

const reducers: ReducersList = {
	profile: profileReducer,
}

interface IProfilePageProps {
	className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
	const dispatch = useAppDispatch()
	const form = useSelector(getProfileForm)
	const isLoading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)
	const readonly = useSelector(getProfileReadonly)
	const validateErrors = useSelector(getProfileValidateErrors)

	useEffect(() => {
		// @ts-expect-error
		dispatch(fetchProfileData())
	}, [dispatch])

	const onChangeFirstname = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ first: value ?? '' }))
		},
		[dispatch],
	)

	const onChangeLastname = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
		},
		[dispatch],
	)

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ city: value ?? '' }))
		},
		[dispatch],
	)

	const onChangeAge = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ age: value ?? '' }))
		},
		[dispatch],
	)

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ username: value ?? '' }))
		},
		[dispatch],
	)

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
		},
		[dispatch],
	)

	const onChangeCurrency = useCallback(
		(currency: Currency) => {
			dispatch(profileActions.updateProfile({ currency }))
		},
		[dispatch],
	)

	const onChangeCountry = useCallback(
		(country: Country) => {
			dispatch(profileActions.updateProfile({ country }))
		},
		[dispatch],
	)

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(s.profilePage, {}, [className])}>
				<ProfilePageHeader />

				{!!validateErrors?.length && validateErrors.map((err) => <Text key={err} theme={TextTheme.ERROR} text={err} />)}

				<ProfileCard
					data={form}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeCity={onChangeCity}
					onChangeAge={onChangeAge}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default ProfilePage
