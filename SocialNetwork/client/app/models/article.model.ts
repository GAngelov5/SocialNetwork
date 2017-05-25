import { User } from './user.model';

export interface Article {
    title: String,
    category: String,
    content: String,
    publisher: User
}