import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { Article } from '../../shared/models/article.interface';

@Injectable()
export class ArticleService {
    constructor(private http:HttpClient) {}

    getArticles(): Observable<any> {
        return this.http.get<any>("/api/articles/");
    }

    getArticlesForUser(userId) {
        return this.http.get("/api/articles/userArticles/" + userId)
            .catch((err) => Observable.of(null));
    }

    getArticleById(articleId) {
        return this.http.get('/api/articles/article/' + articleId)
            .catch((err) => Observable.of(null));
    }

    addArticle(article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/articles/article', article);
    }

    updateArticle(article) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/articles/article', article);
    }

    deleteArticle(articleId) {
        return this.http.delete<Article>('/api/articles/article/' + articleId);
    }
}