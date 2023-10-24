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
    this.uiService.onToggleAddTask().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  public addTask() {
    this.uiService.toggleAddTask();
  }

  public hasRoute(route: string) {
    return route === this.router.url;
  }
}
