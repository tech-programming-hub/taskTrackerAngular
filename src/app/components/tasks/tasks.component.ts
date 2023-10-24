import { Component, OnInit, ViewChild } from '@angular/core';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Task } from '../../model/Task';
import { TaskService } from '../../services/task.service';
import { TASKS } from '../../serverResponses/mockTasks'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  isEdit: boolean = false;

  @ViewChild(EditTaskComponent) taskEditForm!: EditTaskComponent;

  constructor(private taskService: TaskService) {}

  public editTask(task: Task) {
    this.taskEditForm.setValues(task);
  }

  public updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe(
      (task) => {
        this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t))
      }
    );
  }

  public addTask(task: Task) {
    this.taskService.addTask(task).subscribe(
      (task) => (this.tasks.push(task))
    );
  }

  public deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id != task.id)),
      (err) => {
          console.log(err);
      }
    );
  }

  public updateReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}
