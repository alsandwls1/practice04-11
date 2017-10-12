import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DescriptionComponent } from './description/description.component';
import { ConsultComponent } from './consult/consult.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectComponent } from './project/project.component';

import { DemoProComponent } from './demo-pro/demo-pro.component';
import { DemoContentComponent } from './demo-pro/demo-content/demo-content.component';
import { DemoNoticeComponent } from './demo-pro/demo-content/demo-notice/demo-notice.component';
import { DemoFileComponent } from './demo-pro/demo-content/demo-file/demo-file.component';
import { DemoChatComponent } from './demo-pro/demo-content/demo-chat/demo-chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'member', component: MemberComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'new-project', component: NewProjectComponent },
  // { path: 'project', component: ProjectComponent },
  // { path: 'demo-pro', component: DemoProComponent },
  {path:'demo-pro', component:DemoProComponent, children: [
    {path:'', component:DemoContentComponent, outlet: 'router-content'},
    {path:'demo-notice', component:DemoNoticeComponent, outlet: 'router-content'},
    {path:'demo-file', component:DemoFileComponent, outlet: 'router-content'},
    {path:'demo-chat', component:DemoChatComponent, outlet: 'router-content'},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
