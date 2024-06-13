import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import { MatButtonModule } from '@angular/material/button';
import { ResetService } from '../../services/reset.service';
import { customEmailValidator } from '../../validators/custom-email.validator';
import { compareEmails } from '../../validators/compare-emails.validator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RolesComponent,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  showPanel = true;
  form = this.fb.group(
    {
      firstName: [null, [Validators.maxLength(64)]],
      lastName: [null, [Validators.maxLength(64)]],
      email: [
        null,
        {
          validators: [
            Validators.email,
            Validators.required,
            customEmailValidator(),
          ],
          updateOn: 'blur',
        },
      ],
      checkEmail: [
        null,
        {
          validators: [
            Validators.email,
            Validators.required,
            customEmailValidator(),
          ],
        },
      ],
      languages: [null, Validators.required],
      dashboardAccess: this.fb.group({
        touchpointEmail1: this.fb.group({
          default: [false],
          nps: [false],
        }),
        touchpointEmail2: this.fb.group({
          default: [false],
        }),
      }),
      reports: this.fb.group({
        touchpointEmail1: this.fb.group({
          default: [false],
        }),
        touchpointEmail2: this.fb.group({
          default: [false],
        }),
      }),
    },
    {
      validators: [compareEmails()],
    }
  );
  constructor(private fb: FormBuilder, private resetService: ResetService) {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }

  togglePanel() {
    this.showPanel = !this.showPanel;
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get checkEmail() {
    return this.form.get('checkEmail');
  }

  get languages() {
    return this.form.get('languagues');
  }
}
