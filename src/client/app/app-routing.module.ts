import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      { path:'login', component: LoginComponent },
      {
        path: 'main',
        component: MainComponent,
        children: [
          { path: 'welcome', component: WelcomeComponent },
          {
            path: '',
            redirectTo: '/main/welcome',
            pathMatch: 'full'
          },
        ]
      },
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

