import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../model/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  id?: number;
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showEditTask: boolean = false;

  @Output()
  taskEdit: EventEmitter<Task> = new EventEmitter();

  constructor (private uiService: UiService) {
     this.uiService.onToggleEditTask().subscribe(
       (value) => (this.showEditTask = value)
     );
  }

  setValues(task: Task) {
    this.id = task.id;
    this.text = task.text;
    this.day = task.day;
    this.reminder = task.reminder;
  }

  onEditTask(task: Task) {
    const updatedTask = {
      id: task.id,
      text: task.text,
      day: task.day,
      reminder: task.reminder
    }

    //event emit
    this.taskEdit.emit(updatedTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

    //this.showEditTask = !this.showEditTask;
    this.uiService.toggleEditTask();
  }
}
