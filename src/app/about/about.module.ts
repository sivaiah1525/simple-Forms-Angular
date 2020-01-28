import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export const AboutRoutes : Routes = [{
	path:'',
	component: AboutComponent
}]

@NgModule({
	declarations: [
	AboutComponent
	],
	imports: [
	RouterModule.forChild(AboutRoutes)
	],
	exports: []
})
export class AboutModule {}