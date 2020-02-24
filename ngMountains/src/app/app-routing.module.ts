import { EventsComponent } from './components/events/events.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CreateEventComponent } from './components/create-event/create-event.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'user', component: UserProfileComponent},
  { path: 'events', component: EventsComponent},
  { path: 'createEvent',component: CreateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
