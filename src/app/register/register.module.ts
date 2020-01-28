import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';


export const RegisterRoutes : Routes = [{
	path: '',
	component: RegisterComponent
}]

@NgModule({
	declarations: [
		RegisterComponent
	],
	imports:[
	BrowserModule,
	RouterModule.forChild(RegisterRoutes),
	ReactiveFormsModule,
	FormsModule
	],
	exports:[]
})
export class RegisterModule {}