import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: 'category.component.html'
})
export class CategoryComponent {
    private category;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data
            .subscribe(data => {
                if (data) {
                    this.category = data['category'];
                }
            })
    }
}