import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {
        path: "",
        component: PagesComponent,
        children: [
            {
                path: "",
                loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule)
            },
            
        ]
    }
];
