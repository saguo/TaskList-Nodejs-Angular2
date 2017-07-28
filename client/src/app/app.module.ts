import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import { TasksComponent} from './tasks/tasks.component';
import { TaskService} from './services/task.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ AppComponent, TasksComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
