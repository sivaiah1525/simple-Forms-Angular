import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

export const ContactRoutes : Routes = [{
	path: '',
	component: ContactComponent
}]

@NgModule({
	declarations: [
	ContactComponent
	],
	imports: [
	RouterModule.forChild(ContactRoutes)
	],
	exports: []
})
export class ContactModule {}