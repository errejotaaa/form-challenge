import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { RoleComponent } from './role/role.component';

interface Role {
  title: string;
  description: string;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [ReactiveFormsModule, RoleComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RolesComponent,
    },
  ],
})
export class RolesComponent implements OnInit, ControlValueAccessor {
  private innervalue!: string;
  onChange = (value: string) => {};
  onTouched = () => {};

  selectedRole = false;

  roles: Role[] = [
    {
      title: 'Admin',
      description: 'Can edit and view everything in the application',
    },
    {
      title: 'Manager',
      description: 'Can view TPs, analysis, reports, dashboards, conversations',
    },
    {
      title: 'Employee',
      description: 'Has access to personally assigned data',
    },
  ];

  constructor() {}
  ngOnInit(): void {}

  writeValue(value: any): void {
    this.innervalue = value;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  onRoleSelect(role: string) {
    this.innervalue = role;
    this.onChange(role);
    this.selectedRole = true;
  }

  isSelected(role: string) {}
}
