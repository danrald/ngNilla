import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Framework } from '../../models/frameworks.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  frameworks: Framework[] = [];
  loading = true;

  constructor(private frameworkService: DashboardService){

    this.frameworkService.getFrameworks().subscribe({
      next: (frameworks) => {
        this.frameworks = frameworks;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    });


  }
}
