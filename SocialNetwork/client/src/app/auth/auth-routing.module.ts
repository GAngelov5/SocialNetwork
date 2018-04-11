import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent, RegisterComponent } from "./index";

const authRoutes = [{
    path: '',
    children: [{
        path: '',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'logout',
        component: LoginComponent
    }
    ]
}]

@NgModule({
    imports: [ RouterModule.forChild(authRoutes) ],
    exports: [ RouterModule ]
})
export class AuthRoutingModule {}