import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-side-nav',
    imports: [CommonModule, RouterLink],
    template: `
    <nav class="side-nav" [class.open]="isOpen">
      <div class="nav-content">
        <div class="nav-group">
          <h3>Main Menu</h3>
          <a  routerLink="/dashboard" routerLinkActive="active" class="nav-item">Dashboard</a>
          <a  routerLink="/bindings" routerLinkActive="active" class="nav-item">Bindings</a>
          <a  routerLink="/tasks" routerLinkActive="active" class="nav-item">Tasks</a>
          <a  routerLink="/realtime" routerLinkActive="active" class="nav-item">Real Time</a>
        </div>
        <div class="nav-group">
          <h3>Settings</h3>
          <a routerLink="/account" class="nav-item">Account</a>
          <a routerLink="/preferences" class="nav-item">Preferences</a>
        </div>
      </div>
    </nav>
  `,
    styles: [
        `
    .side-nav {
      position: fixed;
      top: 60px;
      left: -250px;
      width: 250px;
      height: calc(100vh - 60px);
      background-color: white;
      color: white;
      transition: left 0.3s ease;
      z-index: 900;
      border-right: 1px solid black;
    }

    .side-nav.open {
      left: 0;
    }

    .nav-content {
      padding: 1rem;
    }

    .nav-group {
      margin-bottom: 2rem;
    }

    .nav-group h3 {
      font-size: 0.9rem;
      color: #21272A;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .nav-item {
      display: block;
      color: #21272A;
      text-decoration: none;
      padding: 0.5rem 0;
      transition: color 0.2s ease;
    }

    .nav-item:hover {
      color: #3498db;
    }
  `,
    ]
})
export class SideNavComponent {
  @Input() isOpen = false;

  constructor() {
    console.log("hi");
  }

}
