import { Article } from "../../shared/models/article.interface";

export interface Category {
    _id: string,
    name: string,
    description: string,
    articles: Article[]
}