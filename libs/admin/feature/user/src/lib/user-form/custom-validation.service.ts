import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '@akaliia/admin/data-access/user';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {
  constructor(private userService: UserService) {}

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  UsedEmail(email: string, actualEmail?: string) {
    return (formGroup: FormGroup) => {
      const emailControl = formGroup.controls[email];

      if (!emailControl) {
        return null;
      }

      if (emailControl.errors && !emailControl.errors.emailUsed) {
        return null;
      }

      if (actualEmail && emailControl.value === actualEmail) {
        return null;
      }

      this.userService.getExistEmail(emailControl.value).subscribe(data => {
        if (data) {
          emailControl.setErrors({ emailUsed: true });
        } else {
          emailControl.setErrors(null);
        }
      });
    };
  }
}
