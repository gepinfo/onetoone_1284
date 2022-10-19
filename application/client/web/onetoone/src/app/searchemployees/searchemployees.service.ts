import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class SearchemployeesService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpSearchRelationship(employeesentity:any): Observable<any> {
        const temp:any = [];
 	 	const objectKeyPair = Object.entries(employeesentity);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + `/employeesentity/get/searchrelationship?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
    }
    GpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/employeesentity' + `?jwt_token=${jwt_token}`);
    }
}