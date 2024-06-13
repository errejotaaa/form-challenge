import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResetService {
  private subject = new Subject();

  constructor() {}

  get reset() {
    return this.subject.asObservable();
  }

  resetForm() {
    this.subject.next(true);
  }
}
