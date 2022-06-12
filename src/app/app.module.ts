import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HeaderComponent } from './componets/header/header.component';
import { FaqsComponent } from './pages/faqs/faqs/faqs.component';
import { ForumsComponent } from './pages/forum/forums/forums.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { NewTopicComponent } from './pages/forum/new-topic/new-topic.component';
import { FooterComponent } from './componets/footer/footer.component';
import { IconFontComponent } from './componets/font/font.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ReplyComponent } from './pages/reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FaqsComponent,
    ForumsComponent,
    LoginComponent,
    SignupComponent,
    NewTopicComponent,
    FooterComponent,
    IconFontComponent,
    InboxComponent,
    ReplyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
