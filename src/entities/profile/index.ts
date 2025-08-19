export { getProfileData } from './model/selectors/get-profile-data/get-profile-data'
export { getProfileError } from './model/selectors/get-profile-error/get-profile-error'
export { getProfileFirstName } from './model/selectors/get-profile-firstname/get-profile-firstname'
export { getProfileLoading } from './model/selectors/get-profile-loading/get-profile-loading'

export { ProfileCard } from './ui/profile-card'
export { profileActions, profileReducer, profileSlice } from './model/slice/profile.slice'
export type { IProfile, IProfileSchema } from './model/types/profile'
export { fetchProfileData } from './model/services/fetch-profile-data/fetch-profile-data'
