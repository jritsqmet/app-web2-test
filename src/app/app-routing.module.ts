import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { InfoComponent } from './screens/info/info.component';
import { ProfeComponent } from './components/profe/profe.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'info', component: InfoComponent},
  { path: 'profe', component: ProfeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
