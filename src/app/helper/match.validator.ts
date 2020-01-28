import {FormGroup, Validators, FormControl} from '@angular/forms';

export function matchValidator(fieldName: string) {
    let fcfirst: FormControl;
    let fcSecond: FormControl;

    return function matchValidator(control: FormControl) {

        if (!control.parent) {
            return null;
        }
        if (!fcfirst) {
            fcfirst = control;
            fcSecond = control.parent.get(fieldName) as FormControl;
            if (!fcSecond) {
                throw new Error('matchValidator(): Second control is not found in the parent group!');
            }

            fcSecond.valueChanges.subscribe(() => {
                fcfirst.updateValueAndValidity();
            });
        }

        if (!fcSecond) {
            return null;
        }

        if (fcSecond.value !== fcfirst.value) {
            return {
                matchOther: true
            };
        }

        return null;
    }
}
