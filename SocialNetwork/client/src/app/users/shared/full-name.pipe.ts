import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../shared/models/user.interface';

@Pipe({name: "fullName"})
export class FullNamePipe implements PipeTransform {
    transform(content: User): String {
        return content.firstName + " " + content.lastName;
    }
}