import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { InfoComponent } from './screens/info/info.component';
<<<<<<< HEAD
import { DanielComponent } from './components/daniel/daniel.component';
=======
<<<<<<< HEAD
import { ProfeComponent } from './components/profe/profe.component';
=======
import { ElizabethComponent } from './components/elizabeth/elizabeth.component';
>>>>>>> 9e237dfb5eca7c88c74f64ca3b66164c08999f7f
>>>>>>> 0dc77c42fcb39d3206d904d651909a3a283aa7fc

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    InfoComponent,
<<<<<<< HEAD
    DanielComponent
=======
<<<<<<< HEAD
    ProfeComponent
=======
    ElizabethComponent
>>>>>>> 9e237dfb5eca7c88c74f64ca3b66164c08999f7f
>>>>>>> 0dc77c42fcb39d3206d904d651909a3a283aa7fc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
