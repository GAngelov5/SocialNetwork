import { Message } from './message.model';

export interface User {
    _id: string,
    firstName: string,
    lastName: string,
    username: string,
    phone?: Number,
    address?: string,
    company?: string,
    position?: string,
    email: string,
    password: string,
    description?: string,
    registered_at: Date,
    following?: string[],
    followers?: string[],
    subscribers?: string[],
    subscribedTo?: string[],    
    messages?: Message[],
    avatarImg: {
        url: string,
        filename: string   
    }
}