import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../model/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  task!: Task;
  private showEditTask: boolean = false;

  @Input()
  taskPassed!: Task;

  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  onUpdateReminder: EventEmitter<Task> = new EventEmitter();

  @Output()
  onEditTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faEdit = faEdit;

  constructor (private uiService: UiService) {
  }

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  updateReminder(task: Task) {
    this.onUpdateReminder.emit(task);
  }

  editTask(task: Task) {
    this.uiService.toggleEditTask();
    this.onEditTask.emit(task);
  }
}
