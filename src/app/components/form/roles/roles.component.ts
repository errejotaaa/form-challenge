import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RoleComponent } from './role/role.component';
import { Role } from './models/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [ReactiveFormsModule, RoleComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  roles: Role[] = [
    new Role('Admin', 'Can edit and view everything in the application'),
    new Role(
      'Manager',
      'Can view TPs, analysis, reports, dashboards, conversations'
    ),
    new Role('Employee', 'Has access to personally assigned data'),
  ];
  ngOnInit(): void {}
}
