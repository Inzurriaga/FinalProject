import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
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
  { path: 'host/:id', component: EditEventComponent },
  { path: 'attending', component: AttendingComponent},
  { path: 'chatroom', component: ChatroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
