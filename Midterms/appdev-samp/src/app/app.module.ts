import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { NaviComponent } from './navi/navi.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginComponent } from './Programs/login/login.component';
import { BSCoEComponent } from './Programs/bsco-e/bsco-e.component';
import { BscsComponent } from './Programs/bscs/bscs.component';
import { BsitComponent } from './Programs/bsit/bsit.component';
//import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ContactsInfoComponent,
    CourseInfoComponent,
    NaviComponent,
    CourseListComponent,
    LoginComponent,
    BSCoEComponent,
    BscsComponent,
    BsitComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'articles', component: ArticlesComponent},
      { path: 'contacts-info', component: ContactsInfoComponent},
      { path: 'course-info', component: CourseInfoComponent},
      { path: 'login', component: LoginComponent},
      { path: 'bsco-e', component: BSCoEComponent},
      { path: 'bscs', component: BscsComponent },
      { path: 'bsit', component: BsitComponent}
    ])
  ],
  providers: [],
  bootstrap: 
  [AppComponent,
  CourseListComponent,
  CourseInfoComponent,
  ContactsInfoComponent,
  LoginComponent,
  BSCoEComponent,
  BscsComponent,
  BsitComponent ]
})
export class AppModule { }
