import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ArticleService {
    constructor(private http:Http) {}

    getArticles() {
        return this.http.get("/api/articles/")
        .map((articles) => articles.json());
    }

    getArticlesForUser(userId) {
        return this.http.get("/api/articles/userArticles/" + userId)
            .map(articles => articles.json());
    }
}