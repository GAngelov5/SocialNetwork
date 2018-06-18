import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { UsersComponent } from './users.component';

import { FullNamePipe } from './shared/full-name.pipe';
import { UsersResolver} from './shared/users-resolver.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    declarations: [
        UsersComponent,
        FullNamePipe
    ],
    providers: [
        UsersResolver
    ]
})
export class UserModule { }