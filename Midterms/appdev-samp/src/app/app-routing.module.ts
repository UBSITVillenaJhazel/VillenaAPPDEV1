import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { LoginComponent } from './Programs/login/login.component';
import { BSCoEComponent } from './Programs/bsco-e/bsco-e.component';
import { BscsComponent } from './Programs/bscs/bscs.component';
import { BsitComponent } from './Programs/bsit/bsit.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent},
  { path: 'contacts-info', component: ContactsInfoComponent},
  { path: 'course-info', component: CourseInfoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'bsco-e', component: BSCoEComponent},
  { path: 'bscs', component: BscsComponent },
  { path: 'bsit', component: BsitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
