import { profileReducer } from 'entities/profile'
import { FC } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/dynamic-module-loader/dynamic-module-loader'

import s from './profile-page.module.scss'

const reducers: ReducersList = {
	profile: profileReducer,
}

interface IProfilePageProps {
	className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(s.profilePage, {}, [className])}>Profile page</div>
		</DynamicModuleLoader>
	)
}

export default ProfilePage
