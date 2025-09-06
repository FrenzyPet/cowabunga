import { getUserAuthData } from 'entities/user'
import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/route-config/route-config'

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
	const auth = useSelector(getUserAuthData)
	const location = useLocation()

	if (!auth) {
		return <Navigate to={RoutePath.main} state={{ from: location }} replace />
	}
	return children
}
