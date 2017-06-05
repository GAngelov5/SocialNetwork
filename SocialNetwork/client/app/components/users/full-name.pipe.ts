import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user.model';

@Pipe({name: "fullName"})
export class FullNamePipe implements PipeTransform {
    transform(content: User): String {
        return content.firstName + " " + content.lastName;
    }
}