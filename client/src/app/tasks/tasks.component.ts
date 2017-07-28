import { Component } from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../../../Task';


@Component({
  selector: 'tasks',
  moduleId: module.id,
  templateUrl:'./tasks.component.html'
})
export class TasksComponent { 
		tasks: Task[];
		title: string;

		constructor(private taskService: TaskService){
			this.taskService.getTasks()
			.subscribe(tasks => {
				this.tasks = tasks;
			});
		}
		addTask(event){
			event.preventDefault();
			var newTask = {
				title: this.title,
				isDone: false
			}

			this.taskService.addTask(newTask).subscribe(task => {
				this.tasks.push(task);
				this.title = this.title;
			});
		}
}