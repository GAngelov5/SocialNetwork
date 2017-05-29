import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ArticleService {
    constructor(private http:Http) {}

    getArticles() {
        return this.http.get("http://localhost:3000/api/articles/")
        .map((articles) => articles.json());
    }

    getArticlesForUserObservable(userId) {
        return this.http.get("http://localhost:3000/api/articles/userArticles/" + userId);
    }

    getArticleById(articleId) {
        return this.http.get('http://localhost:3000/api/articles/article/' + articleId).map((article) => article.json());
    }

    getArticlesForUser(userId) {
        return this.getArticlesForUserObservable(userId).map(articles => articles.json());
    }

    addArticle(article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/articles/article', article)
            .map((res) => res.json())
    }
}