import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-top-nav',
    imports: [CommonModule],
    template: `
    <nav class="top-nav">
      <button class="menu-button" (click)="toggleSidenav.emit()">
        ☰
      </button>
      <h1 class="title">NgShell</h1>
      <div class="nav-items">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </div>
    </nav>
  `,
    styles: [`
    .top-nav {
      display: flex;
      align-items: center;
      padding: 1rem;
      background-color: white;
      color: #21272A;
      height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      border-bottom: 1px solid red;
    }

    .menu-button {
      background: none;
      border: none;
      color: #21272A;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
    }

    .title {
      margin: 0 1rem;
      font-size: 1.2rem;
    }

    .nav-items {
      margin-left: auto;
    }

    .nav-items a {
      color: #21272A;
      text-decoration: none;
      margin-left: 1.5rem;
    }

    .nav-items a:hover {
      text-decoration: underline;
    }
  `]
})
export class TopNavComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}
