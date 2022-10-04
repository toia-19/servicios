import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    // se coloca dentro de la ruta que se verá protegida
    path:'admin',component:AdminComponent, canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }