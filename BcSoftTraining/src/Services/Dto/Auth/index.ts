export const ROLE = {
    user: 'user',
    admin: 'admin',
    bo: 'bo'
} as const;

export type UserRoleKeys =  keyof typeof ROLE;

export interface AuthModel {
    token: string ;
    refreshToken: string;
}

export interface UserModel {
    role: UserRoleKeys | null
}

export  const authInitialState = { token: '', refreshToken: ''};