import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
 {path: 'home',component: HomeComponent},
 {path: 'contact',component: ContactComponent},
 {path: 'data', component: DataComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
