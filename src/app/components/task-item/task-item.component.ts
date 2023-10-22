import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../model/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input()
  taskPassed!: Task;

  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  onUpdateReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  updateReminder(task: Task) {
    this.onUpdateReminder.emit(task);
  }
}
