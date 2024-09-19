import { FC, memo } from 'react'
import { cn } from 'shared/lib/classnames/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'
import type { ISidebarItem } from 'widgets/sidebar/model/items'

import s from './sidebar-item.module.scss'

interface ISidebarItemProps {
	item: ISidebarItem
	collapsed: boolean
}

const SidebarItem: FC<ISidebarItemProps> = ({ item, collapsed }) => {
	return (
		<AppLink className={cn(s.item, { [s.collapsed]: collapsed })} theme={AppLinkTheme.SECONDARY} to={item.path}>
			<item.icon className={s.icon} />
			<span className={s.link}>{item.text}</span>
		</AppLink>
	)
}

SidebarItem.displayName = 'SidebarItem'

export default memo(SidebarItem)
