import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Image } from '../models/image.interface';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UploadService {
    constructor(private httpClient: HttpClient) {}

    uploadImage(image, currentUserId) {
        let formData: FormData = new FormData();
        formData.append('file', image);
        let headers = new HttpHeaders()
            .set('user-header', currentUserId);
        return this.httpClient.post<Image>('http://localhost:3000/api/users/user/uploadProfileImage',
                                            formData,
                                            {headers: headers})
            .catch((err) => Observable.of(null));
    }
}