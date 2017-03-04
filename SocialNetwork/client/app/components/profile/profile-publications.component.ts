import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/articles.service';

@Component({
    moduleId: module.id,
    selector: "profile-publications",
    templateUrl: "profile-publications.component.html"
})
export class ProfilePublicationsComponent implements OnInit {
    publications: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private articleService: ArticleService) {
        this.publications = [];
    }

    ngOnInit() {
        let userId:string;
        this.route.params.subscribe(params => {
            userId = params['id'];
        });
        this.articleService.getArticlesForUser(userId)
            .subscribe(publications => this.publications = publications)
    }
}