import { AbstractControl, ValidationErrors } from '@angular/forms';
import { GetUserNames } from './get-user-name-service';
import { map } from 'rxjs/operators';

export class CheckUserName{
	static validateUserName(getUserName: GetUserNames){
		return (control: AbstractControl) => {
			return getUserName.getExistingUsers()
					.pipe(
					map((data) => {
						if(data === control.value){
							return data;
						}
						return null;
					})
				)
		}
	}
}