import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private showEditTask: boolean = false;
  private subject = new Subject<any>();
  private subjectEdit = new Subject<any>();

  constructor() { }

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggleAddTask(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleEditTask() {
    this.showEditTask = !this.showEditTask;
    this.subjectEdit.next(this.showEditTask);
  }

  onToggleEditTask(): Observable<any> {
    return this.subjectEdit.asObservable();
  }

}
