import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

export const HomeRoutes : Routes = [{
	path : '',
	component : HomeComponent
}]

@NgModule({
	declarations: [
	HomeComponent
	],
	imports: [
	RouterModule.forChild(HomeRoutes)
	],
	exports: []
})

export class HomeModule {}