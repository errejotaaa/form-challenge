import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent implements OnInit {
  @Input() role = '';
  @Input() description = '';
  @Output() selected = new EventEmitter<string>();

  isSelected = false;

  constructor() {}

  ngOnInit(): void {}

  get classes() {
    return {
      active: this.isSelected,
    };
  }

  onSelectRole() {
    const role = document.querySelectorAll('.role-card');
    role.forEach((role) => role.classList.remove('active'));
    this.isSelected = !this.isSelected;
    this.selected.emit(this.role);
  }
}
