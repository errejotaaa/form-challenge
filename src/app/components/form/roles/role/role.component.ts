import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent implements OnInit {
  @Input() role = '';
  @Input() description = '';

  ngOnInit(): void {}
}
