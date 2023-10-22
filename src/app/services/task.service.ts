import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../model/Task';
import { TASKS } from '../serverResponses/mockTasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

@Injectable({
  providedIn: 'root'
})
export class TaskService {



  private apiUrl='http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);

  }

  public getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  public deleteTask(task: Task) : Observable<Task> {
    const taskId = task.id;
    const uri = this.apiUrl+'/'+taskId;
    return this.http.delete<Task>(uri);
  }

  public updateReminder(task: Task): Observable<Task> {
    const taskId = task.id;
    const uri = this.apiUrl+'/'+taskId;
    return this.http.put<Task>(uri, task, httpOptions);
  }
}
