export interface AuthenticatedUser {
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string
}

export interface LoginResponse {
    token: string,
    success: boolean,
    msg: string,
    user: AuthenticatedUser
}