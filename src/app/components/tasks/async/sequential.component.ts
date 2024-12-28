import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
@Component({
    selector: 'app-sequential-async',
    imports: [ CommonModule ],
    standalone: true,
    styleUrl: '../tasks.component.css',
    template: `
      <div class="example">
        <h3>Sequential Async Example</h3>
        <p>Status: {{ status }}</p>
        <button (click)="runSequentialTasks()">Run Sequential Tasks</button>
        <div *ngIf="steps.length > 0">
          <h4>Steps Completed:</h4>
          <ul>
            <li *ngFor="let step of steps">{{ step }}</li>
          </ul>
        </div>
      </div>
    `
  })
  export class SequentialAsyncComponent {
    status = 'Idle';
    steps: string[] = [];
  
    async runSequentialTasks() {
      this.status = 'Starting sequential tasks...';
      this.steps = [];
  
      try {
        // Step 1
        this.status = 'Running step 1...';
        const step1 = await this.simulateStep(1);
        this.steps.push(step1);
  
        // Step 2
        this.status = 'Running step 2...';
        const step2 = await this.simulateStep(2);
        this.steps.push(step2);
  
        // Step 3
        this.status = 'Running step 3...';
        const step3 = await this.simulateStep(3);
        this.steps.push(step3);
  
        this.status = 'All steps completed';
      } catch (error) {
        this.status = 'Error in sequential tasks';
      }
    }
  
    private simulateStep(step: number): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Step ${step} completed successfully`);
        }, 1000);
      });
    }
  }