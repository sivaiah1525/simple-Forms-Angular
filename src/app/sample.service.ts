import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'

@Injectable()

export class SampleService{

	userNameSubject : Subject<string> = new Subject<string>();
	userName$ : Observable<string> = this.userNameSubject.asObservable();

	constructor(){ }

	updateUser(value){
		this.userNameSubject.next(value)
	}
}