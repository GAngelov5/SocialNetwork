"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('../../services/user.service');
var ProfileOverviewComponent = (function () {
    function ProfileOverviewComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.canEditDescription = false;
        this.editAllowed = false;
        this.userInfo = {
            biography: '',
            following: []
        };
        this.userBiography = '';
        this.userId = '';
    }
    ProfileOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            _this.canEditDescription =
                _this.userId === JSON.parse(localStorage.getItem('currentUser')).userId;
        });
        this.userService.getUser(this.userId).subscribe(function (user) {
            if (user) {
                if (user.description) {
                    _this.userInfo.biography = user.description;
                    _this.userBiography = user.description;
                }
                else {
                    _this.userInfo.biography = 'No Description';
                    _this.userBiography = '';
                }
                _this.userInfo.following = user.following;
            }
        });
    };
    ProfileOverviewComponent.prototype.editDescription = function () {
        this.editAllowed = true;
        this.canEditDescription = false;
    };
    ProfileOverviewComponent.prototype.submitDescription = function () {
        var _this = this;
        var user = {
            _id: this.userId,
            biography: this.userInfo.biography
        };
        this.userService.updateUser(user).subscribe(function (user) {
            if (user) {
                _this.editAllowed = false;
                _this.canEditDescription = true;
            }
        });
    };
    ProfileOverviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "profile-overview",
            templateUrl: "profile-overview.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService])
    ], ProfileOverviewComponent);
    return ProfileOverviewComponent;
}());
exports.ProfileOverviewComponent = ProfileOverviewComponent;
//# sourceMappingURL=profile-overview.component.js.map