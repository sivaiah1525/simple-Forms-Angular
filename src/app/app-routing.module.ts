import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule,HomeRoutes } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { RegisterModule,RegisterRoutes } from './register/register.module';
import { RegisterComponent } from './register/register.component';
import { LoginModule,LoginRoutes } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { ContactModule, ContactRoutes } from './contact/contact.module';
import { ContactComponent } from './contact/contact.component';
import { AboutModule, AboutRoutes } from './about/about.module';
import { AboutComponent } from './about/about.component';
import { AuthGaurdService } from './can_activate.service';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path:'register',
		component: RegisterComponent
	},
	{
		path:'login',
		component: LoginComponent,

	},
	{
		path:'contact',
		component: ContactComponent,
		canActivate: [AuthGaurdService]
	},
	{
		path:'about',
		component: AboutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule, RegisterModule,LoginModule,ContactModule,AboutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
