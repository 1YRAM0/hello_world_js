import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball';
import { DragonballSuperComponent } from './pages/dragonballSuper/dragonballSuper';

export const routes: Routes = [

  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },
   {
    path: 'dragonballSuper',
    component: DragonballSuperComponent,
  },


  {path: '**',redirectTo: '',}
];
