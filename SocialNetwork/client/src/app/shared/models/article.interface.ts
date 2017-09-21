import { User } from './user.interface';

export interface Article {
    title: String,
    category: String,
    content: String,
    publisher: User
}