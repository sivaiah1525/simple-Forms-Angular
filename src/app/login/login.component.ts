import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,Validator } from '@angular/forms';
import { SampleService } from '../sample.service';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../can_activate.service';


@Component({
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
	newUser: any = [];
	loginForm: FormGroup;
	checkedValue: any = [];
	loginValidation: boolean = true;
	
 	constructor(private sampleService: SampleService,private route: Router, private fb: FormBuilder){ }
	ngOnInit(){
		this.loginForm = this.fb.group({
       	userName:['',[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]+$')]],
       	password:['', [Validators.required]]
			
		})
		// this.sampleService.userName$.subscribe(value =>{
		// 	this.newUser.push(value);
		// 	console.log('login comp --',this.newUser);
		// })
		this.newUser = JSON.parse(localStorage.getItem('registerFormData'))
		console.log(this.newUser);
	}

	login(){
		this.checkedValue = this.newUser.find((value) =>{
			return value.userName === this.loginForm.value.userName && value.password === this.loginForm.value.password;
		})
		console.log(this.checkedValue);
		if(this.checkedValue){
			this.loginValidation = true;
		localStorage.setItem( 'token' , 'CanActivate GuardService');

      this.route.navigate(['/contact']);

		}else {
			this.loginValidation = false;
		}

	}

}