import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventsComponent } from './components/events/events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventComponent } from './components/event/event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FilestackModule } from '@filestack/angular';
import { MatSelectModule } from '@angular/material/select';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { HostEventComponent } from './components/host-event/host-event.component';
import { AttendingComponent } from './components/attending/attending.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    UserProfileComponent,
    EventsComponent,
    CreateEventComponent,
    EventComponent,
    UpdateUserComponent,
    EditEventComponent,
    HostEventComponent,
    AttendingComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FilestackModule,
    MatSelectModule,
    MatCheckboxModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
