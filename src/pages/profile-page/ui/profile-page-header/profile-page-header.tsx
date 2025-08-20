import { getProfileReadonly, profileActions } from 'entities/profile'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { cn } from 'shared/lib/classnames/classnames'
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch'
import { Button, ButtonTheme } from 'shared/ui/button'
import { Text } from 'shared/ui/text'

import s from './profile-page-header.module.scss'

interface IProfilePageHeaderProps {
	className?: string
}

const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({ className }) => {
	const dispatch = useAppDispatch()
	const readonly = useSelector(getProfileReadonly)

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	}, [dispatch])

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSaveProfile = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	return (
		<div className={cn(s.profilePageHeader, {}, [className])}>
			<Text title='Профиль' />

			<div className={s.buttons}>
				<Button
					theme={readonly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED}
					className={s.button}
					onClick={readonly ? onEdit : onCancelEdit}
				>
					{readonly ? 'Редактировать' : 'Отменить'}
				</Button>

				{!readonly && (
					<Button theme={ButtonTheme.OUTLINE} className={s.button} onClick={readonly ? onEdit : onSaveProfile}>
						Сохранить
					</Button>
				)}
			</div>
		</div>
	)
}

ProfilePageHeader.displayName = 'ProfilePageHeader'

export default memo(ProfilePageHeader)
