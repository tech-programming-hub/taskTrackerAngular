import { Component } from '@angular/core';
import { Task } from '../../model/Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showAddTask: boolean = false;
  subscription!: Subscription;
  title: string = 'TaskTracker';

  constructor (private uiService: UiService, private router: Router) {
  console.log("1. In add task constructor Header Component:  "+ this.showAddTask);
    this.uiService.onToggleAddTask().subscribe(
      (value) => (this.showAddTask = value)
    );
    console.log("2. In add task constructor Header Component:  "+ this.showAddTask);
  }

  public addTask() {
    console.log("1. In add task method Header Component:  "+ this.showAddTask);
    this.uiService.toggleAddTask();
    console.log("2. In add task method Header Component:  "+ this.showAddTask);
  }

  public hasRoute(route: string) {
    return route === this.router.url;
  }
}
