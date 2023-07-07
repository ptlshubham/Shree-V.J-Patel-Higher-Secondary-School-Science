import { Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';


export const AppRoutes: Routes = [
  
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: '',
     component:MainComponent,
     pathMatch:'full'
        
    },
    {
        path: 'basic',
        loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
    },
    {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
    },
    {
        path: 'more',
        loadChildren: () => import('./more/more.module').then(m => m.MoreModule)
    },


];
