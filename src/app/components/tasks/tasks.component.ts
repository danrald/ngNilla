import { Component } from '@angular/core';
import { AsyncComponent } from './async/async.component'
import {ParallelAsyncComponent} from './async/parallel.component'
import {SequentialAsyncComponent } from './async/sequential.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [AsyncComponent, ParallelAsyncComponent, SequentialAsyncComponent, CommonModule ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
