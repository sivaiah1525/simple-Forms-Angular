import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common'; 

export const LoginRoutes : Routes =[{
	path:'',
	component: LoginComponent
}]

@NgModule({
	declarations: [
	LoginComponent
	],
	imports: [
	FormsModule,
	CommonModule,
	ReactiveFormsModule,
	RouterModule.forChild(LoginRoutes)
	],
	exports: []
})
export class LoginModule {}