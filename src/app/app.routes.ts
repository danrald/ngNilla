import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AccountComponent } from './components/account/account.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { RealtimeComponent } from './components/realtime/realtime.component';

export const routes: Routes = [ 
    
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'bindings', component: BindingsComponent },
    {path: 'tasks', component: TasksComponent },
    // {path: 'realtime', component: RealtimeComponent },
    {path: 'realtime',loadComponent: () => import('./components/realtime/realtime.component').then(c => c.RealtimeComponent)},
    {path: 'account', component: AccountComponent},
    {path: 'preferences', component:PreferencesComponent}
    ];

    // path: '**', component: ProjectsComponent },
