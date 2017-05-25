var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
var ProfileOverviewComponent = (function () {
    function ProfileOverviewComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.editAllowed = false;
        this.articles = [];
        this.descriptionEmitter = new EventEmitter();
    }
    //TODO When edit description should see the current Description and 
    //change it, not writing new one
    // ngOnInit() {
    //     Object.assign(this.editedDescription, this.userDescription);
    // }
    ProfileOverviewComponent.prototype.editDescription = function () {
        this.editAllowed = !this.editAllowed;
    };
    ProfileOverviewComponent.prototype.submitDescription = function () {
        this.descriptionEmitter.emit(this.editedDescription);
        this.editDescription();
    };
    return ProfileOverviewComponent;
}());
__decorate([
    Input('access'),
    __metadata("design:type", Boolean)
], ProfileOverviewComponent.prototype, "userAccess", void 0);
__decorate([
    Input('description'),
    __metadata("design:type", String)
], ProfileOverviewComponent.prototype, "userDescription", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ProfileOverviewComponent.prototype, "descriptionEmitter", void 0);
ProfileOverviewComponent = __decorate([
    Component({
        selector: "profile-overview",
        templateUrl: "profile-overview.component.html"
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        UserService])
], ProfileOverviewComponent);
export { ProfileOverviewComponent };
//# sourceMappingURL=profile-overview.component.js.map