import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './pages/faqs/faqs/faqs.component';
import { ForumsComponent } from './pages/forum/forums/forums.component';
import { NewTopicComponent } from './pages/forum/new-topic/new-topic.component';
import { HomeComponent } from './pages/home/home/home.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ReplyComponent } from './pages/reply/reply.component';
import { SignupComponent } from './pages/signup/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'forums',
    component: ForumsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'new-topic',
    component: NewTopicComponent,
  },
  {
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'reply',
    component: ReplyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
