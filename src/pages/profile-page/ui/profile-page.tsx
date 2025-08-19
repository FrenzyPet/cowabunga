import {
	ProfileCard,
	fetchProfileData,
	getProfileData,
	getProfileError,
	getProfileLoading,
	profileReducer,
} from 'entities/profile'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/dynamic-module-loader/dynamic-module-loader'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'

import s from './profile-page.module.scss'

const reducers: ReducersList = {
	profile: profileReducer,
}

interface IProfilePageProps {
	className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
	const dispatch = useAppDispatch()
	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)

	useEffect(() => {
		// @ts-expect-error
		dispatch(fetchProfileData())
	}, [dispatch])
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(s.profilePage, {}, [className ?? ''])}>
				<ProfileCard data={data} isLoading={isLoading} error={error} />
			</div>
		</DynamicModuleLoader>
	)
}

export default ProfilePage
