import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: 'category.component.html'
})
export class CategoryComponent {
    private category;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.category = this.route.snapshot.data['category'];
    }
}