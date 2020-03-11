import { HostComponent } from './components/host/host.component';
import { UserComponent } from './components/user/user.component';
import { HostEventComponent } from './components/host-event/host-event.component';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { AttendingComponent } from './components/attending/attending.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'user', component: UserProfileComponent},
  { path: 'events', component: EventsComponent},
  { path: 'createEvent',component: CreateEventComponent},
  { path: 'events/:id', component: EventComponent},
  { path: 'attending', component: AttendingComponent},
  { path: 'host', component: HostEventComponent},
  { path: 'user/:username', component: UserComponent},
  { path: 'admin', component: HostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
