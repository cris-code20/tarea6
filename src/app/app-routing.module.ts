import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'views',
    loadChildren: () => import('./views/views.module').then( m => m.ViewsPageModule)
  },
  {
    path: 'sex-name',
    loadChildren: () => import('./funciones/sex-name/sex-name.module').then( m => m.SexNamePageModule)
  },
  {
    path: 'age-name',
    loadChildren: () => import('./funciones/age-name/age-name.module').then( m => m.AgeNamePageModule)
  },
  {
    path: 'university',
    loadChildren: () => import('./funciones/university/university.module').then( m => m.UniversityPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./funciones/clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'word-press',
    loadChildren: () => import('./funciones/word-press/word-press.module').then( m => m.WordPressPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./funciones/info/info.module').then( m => m.InfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
