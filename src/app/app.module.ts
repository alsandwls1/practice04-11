import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatService } from './service/chat.service';
import { AuthService } from './service/auth.service';
import { environment } from '../environments/environment';

//material
import { MdToolbarModule, MdSnackBarModule, MdCardModule, MdInputModule,
  MdRadioModule, MdButtonModule, MdDialogModule, MdSidenavModule, MdGridListModule } from '@angular/material';
import {MatProgressBarModule, MatSliderModule} from '@angular/material';

//flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

//file upload
// import { FileUploadModule } from 'ng2-file-upload';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DescriptionComponent } from './description/description.component';
import { ConsultComponent } from './consult/consult.component';
import { ProfileComponent } from './profile/profile.component';
import { HiddenDirective } from './directive/hidden.directive';
import { DialogComponent } from './dialog/dialog.component';
import { ModalDirective } from './directive/modal.directive';
import { ConfirmComponent } from './confirm/confirm.component';

//service
import { MemberService } from './service/member.service';
import { ProjectService } from './service/project.service';
import { ProjectSearchService} from './service/project-search.service';
import { FileUploadService} from './service/file-upload.service';

// import { MaterialModule } from '@angular/material';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectComponent } from './project/project.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NoticeComponent } from './notice/notice.component';

import { DemoProComponent } from './demo-pro/demo-pro.component';
import { DemoSideComponent } from './demo-pro/demo-side/demo-side.component';
import { DemoContentComponent } from './demo-pro/demo-content/demo-content.component';
import { DemoProgressComponent } from './demo-pro/demo-progress/demo-progress.component';
import { DemoNoticeComponent } from './demo-pro/demo-content/demo-notice/demo-notice.component';
import { DemoFileComponent } from './demo-pro/demo-content/demo-file/demo-file.component';
import { DemoBoardComponent } from './demo-pro/demo-content/demo-board/demo-board.component';
import { DetailsUploadComponent } from './demo-pro/demo-content/demo-file/details-upload/details-upload.component';
import { DemoChatComponent } from './demo-pro/demo-content/demo-chat/demo-chat.component';
import { FeedComponent } from './demo-pro/demo-content/demo-chat/feed/feed.component';
import { ChatFormComponent } from './demo-pro/demo-content/demo-chat/chat-form/chat-form.component';
import { MessageComponent } from './demo-pro/demo-content/demo-chat/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    DescriptionComponent,
    ConsultComponent,
    ProfileComponent,
    HiddenDirective,
    DialogComponent,
    ModalDirective,
    ConfirmComponent,
    ProjectListComponent,
    NewProjectComponent,
    ProjectComponent,
    SlideBarComponent,
    FooterComponent,
    ProgressBarComponent,
    NoticeComponent,
    DemoProComponent,
    DemoSideComponent,
    DemoContentComponent,
    DemoProgressComponent,
    DemoNoticeComponent,
    DemoFileComponent,
    DemoBoardComponent,
    DetailsUploadComponent,
    DemoChatComponent,
    FeedComponent,
    ChatFormComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // MaterialModule

    //material
    MdToolbarModule, MdSnackBarModule, MdCardModule, MdInputModule,
    MdRadioModule, MdButtonModule, MdDialogModule, MdGridListModule,
    MdSidenavModule, MatProgressBarModule, MatSliderModule,

    //flex-layout
    FlexLayoutModule,

    //file upload
    HttpClientModule,

    //firebase
    AngularFireModule,AngularFireDatabaseModule,AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [MemberService, ProjectService, ProjectSearchService, FileUploadService,
    //firebase
    ChatService,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
