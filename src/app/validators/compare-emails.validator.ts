import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function compareEmails(): ValidatorFn {
  return (form: AbstractControl): Validators | null => {
    const email = form.get('email')?.value;
    const checkEmail = form.get('checkEmail')?.value;
    const isEmailEqual = email === checkEmail;
    return isEmailEqual ? null : { compareEmail: 'Emails must be the same' };
  };
}
