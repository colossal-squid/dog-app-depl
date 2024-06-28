import { Routes } from '@angular/router';
import { MainViewComponent } from './routes/main-view/main-view.component';
import { RandomDogComponent } from './routes/random-dog/random-dog.component';

export const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'random', component: RandomDogComponent },
];
