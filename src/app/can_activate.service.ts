import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()

export class AuthGaurdService implements CanActivate{
newValue;
	constructor(){}

	canActivate(){
		this.newValue = (localStorage.getItem('token'))
		if(this.newValue){
		console.log(this.newValue);

			return true;

		}else {
			return false;
		}

	}
}