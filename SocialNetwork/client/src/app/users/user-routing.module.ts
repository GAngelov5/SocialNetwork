import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UsersResolver } from "./shared/users-resolver.service";
import { ProfileComponent } from "../profile/components/profile/profile.component";
import { ProfileResolver } from "../profile/shared/profile-resolver.service";
import { PublicationsResolver } from "../profile/shared/user-publications-resolver.service";

const profileRoutes: Routes = [
    {
      path: '',
      children: [
        {
            path: '',
            component: UsersComponent,
            resolve: {
                users: UsersResolver
            }
        },
        {
          path: ':id',
          component: ProfileComponent,
          resolve: {
            currentUser: ProfileResolver,
            userPublications: PublicationsResolver
          }
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [ RouterModule.forChild(profileRoutes) ],
    exports: [ RouterModule ]
  })
  export class UserRoutingModule {}