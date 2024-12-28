
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-parallel-async',
    standalone: true,
     imports: [ CommonModule ],
     styleUrl: '../tasks.component.css',
    template: `
      <div class="example">
        <h3>Parallel Promises Example</h3>
        <p>Status: {{ status }}</p>
        <button (click)="runParallelTasks()">Run Parallel Tasks</button>
        <div *ngIf="results.length > 0">
          <h4>Results:</h4>
          <ul>
            <li *ngFor="let result of results">{{ result }}</li>
          </ul>
        </div>
      </div>
    `
  })

  export class ParallelAsyncComponent {
    status = 'Idle';
    results: string[] = [];
  
    async runParallelTasks() {
      this.status = 'Processing multiple tasks...';
      this.results = [];
  
      try {
        const promises = [
          this.simulateTask(1, 2000),
          this.simulateTask(2, 1000),
          this.simulateTask(3, 3000)
        ];
  
        const results = await Promise.all(promises);
        this.results = results;
        this.status = 'All tasks completed';
      } catch (error) {
        this.status = 'Error in one or more tasks';
      }
    }
  
    private simulateTask(id: number, delay: number): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Task ${id} completed after ${delay}ms`);
        }, delay);
      });
    }
  }