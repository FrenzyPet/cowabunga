import {
	ProfileCard,
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileLoading,
	getProfileReadonly,
	profileActions,
	profileReducer,
} from 'entities/profile'
import { FC, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/dynamic-module-loader/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'

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
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(s.profilePage, {}, [className])}>
				<ProfilePageHeader />
				<ProfileCard
					data={form}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeCity={onChangeCity}
					onChangeAge={onChangeAge}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default ProfilePage
