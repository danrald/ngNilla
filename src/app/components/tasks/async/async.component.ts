import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-async-example',
     imports: [ CommonModule ],
     styleUrl: '../tasks.component.css',
    standalone: true,
    template: `
      <div class="example">
        <h3>Simple Promise Example</h3>
        <p>Status: {{ status }}</p>
        <button (click)="runAsyncTask()">Run Task</button>
        <p *ngIf="result">Result: {{ result }}</p>
      </div>
    `
  })
  export class AsyncComponent {
    status = 'Idle';
    result = '';
  
    async runAsyncTask() {
      this.status = 'Processing...';
      try {
        const data = await this.simulateAsyncOperation();
        this.result = data;
        this.status = 'Completed';
      } catch (error) {
        this.status = 'Error occurred';
        this.result = error as string;
      }
    }
  
    private simulateAsyncOperation(): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Task completed successfully!');
        }, 2000);
      });
    }
  }