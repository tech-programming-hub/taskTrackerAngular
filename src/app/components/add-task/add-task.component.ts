import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Task } from '../../model/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  id!: number;
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  @Output()
  task : EventEmitter<Task> = new EventEmitter();

  constructor (private uiService: UiService) {
     this.uiService.onToggleAddTask().subscribe(
       (value) => (this.showAddTask = value)
     );
  }

  public onSubmitTaskForm(task: Task){
    const newTask = {
      text: task.text,
      day: task.day,
      reminder: task.reminder
    }

    //event emit
    this.task.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
