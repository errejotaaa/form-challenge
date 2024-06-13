import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function customEmailValidator(): ValidatorFn {
  return (control: AbstractControl): Validators | null => {
    const emailRegex = /^\w+[\w.-]*@\w+([-\w.]+\w+)?\.[a-zA-Z]{2,}$/;
    const email = control.value;

    return emailRegex.test(email) ? null : { invalidEmail: 'Invalid email' };
  };
}
