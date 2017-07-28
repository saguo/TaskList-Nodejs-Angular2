import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  providers:[TaskService]
})
export class AppComponent  { }
