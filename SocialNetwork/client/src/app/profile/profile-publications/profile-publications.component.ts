import { Component, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../article/shared/articles.service';

@Component({
    selector: "profile-publications",
    templateUrl: "profile-publications.component.html"
})
export class ProfilePublicationsComponent {
    @Input()
    publications: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private articleService: ArticleService) {
        
    }

    navigatToAddArticle() {
        this.router.navigate(['/addArticle'])
    }
}