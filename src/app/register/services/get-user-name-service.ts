import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GetUserNames{
	constructor(private http: HttpClient){}
	getExistingUsers(){
		return this.http.get('./assests/existingUserNames.json')
	}
}
