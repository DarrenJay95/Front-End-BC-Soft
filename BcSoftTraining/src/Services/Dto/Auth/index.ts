export const ROLE = {
    user: 'user',
    admin: 'admin',
    bo: 'bo'
} as const;

export type UserRoleKeys =  keyof typeof ROLE;

export interface AuthModel {
    token: string | undefined;
    refreshToken: string | undefined;
}

export interface UserModel {
    auth: AuthModel;
    role: UserRoleKeys | null
}