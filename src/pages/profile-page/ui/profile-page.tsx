import { ProfileCard, fetchProfileData, profileReducer } from 'entities/profile'
import { FC, useEffect } from 'react'
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

	useEffect(() => {
		// @ts-expect-error
		dispatch(fetchProfileData())
	}, [dispatch])
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(s.profilePage, {}, [className ?? ''])}>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	)
}

export default ProfilePage
