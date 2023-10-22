import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskService } from '../../services/task.service';
import { TASKS } from '../../serverResponses/mockTasks'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

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
