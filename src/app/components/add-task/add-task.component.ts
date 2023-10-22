import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../model/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor (private uiService: UiService) {
    console.log("1. In constructor AddTaskComponent:  "+ this.showAddTask);
     this.uiService.onToggleAddTask().subscribe(
           (value) => (this.showAddTask = value)
         );
     console.log("2. In constructor AddTaskComponent:  "+ this.showAddTask);
  }

  @Output()
  task : EventEmitter<Task> = new EventEmitter();

  public onSubmitTaskForm(){
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //event emit
    this.task.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
