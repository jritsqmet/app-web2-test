import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { InfoComponent } from './screens/info/info.component';

import { ElizabethComponent } from './components/elizabeth/elizabeth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'elizabeth', component: ElizabethComponent },
  { path: 'daniel', component: ElizabethComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
