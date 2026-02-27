import { Routes } from '@angular/router';
import { SessionsView } from './components/sessions-view/sessions-view';
import { SessionForm } from './components/session-form/session-form';
import { SessionDetailsComponent } from './components/session-details/session-details';
import { sessionExistsGuard } from './guards/session-exist.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/sessions', pathMatch: 'full' },
  { path: 'sessions', component: SessionsView },
  { path: 'sessions/new', component: SessionForm },
  { 
    path: 'sessions/:id', 
    component: SessionDetailsComponent,
    canActivate: [sessionExistsGuard]
  },
  { path: '**', redirectTo: '/sessions' } 
];