import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
//import { MainLayoutComponent } from './app/layout/main-layout/main-layout.componentx';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// @Component({
//     selector: 'app-root',
//     imports: [MainLayoutComponent],
//     template: `
//     <!-- <app-main-layout>
//       <div class="content">
//         <h1>Welcome to Our Application</h1>
//         <p>This is the main content area. The layout includes a responsive top navigation 
//            and a collapsible side navigation.</p>
//       </div>
//     </app-main-layout> -->
//     shit
//   `,
//     styles: [`
//     .content {
//       max-width: 800px;
//       margin: 0 auto;
//     }

//     h1 {
//       color: #2c3e50;
//       margin-bottom: 1rem;
//     }

//     p {
//       color: #34495e;
//       line-height: 1.6;
//     }
//   `]
// })
export class App {
}

// bootstrapApplication(App);

bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));