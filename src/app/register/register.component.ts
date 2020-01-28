
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { matchValidator } from '../helper/match.validator';
import { SampleService } from '../sample.service';
//import { CheckUserName } from './services/check-user-name-service';
//import { GetUserNames } from './services/get-user-name-service';
@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    // password = 'password';
    isvalid: boolean = true;
    user : any = [];
    updateUser;

    constructor(private fb: FormBuilder,private route: Router,
      private sampleService: SampleService/* private getUserNames: GetUserNames*/) { }

    ngOnInit() {
       this.registerForm = this.fb.group({
       	name:['', [Validators.required]],
       	userName:['',[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]+$')],
       			 //CheckUserName.validateUserName(this.getUserNames)
       			 ],
       	email:['', [Validators.required]],
       	password:['', [Validators.required]],
       	cPassword:['', [Validators.required]],
       	phoneNumber:['', [Validators.required, Validators.pattern('^[0-9]'), Validators.maxLength(10)]],
       })
    }
    
    
    
    get f() { return this.registerForm.controls; }

    onSubmit() {
    	console.log("CLICKED");
        this.submitted = true;
    }
   
    onClick(){
      if(this.registerForm.value.password === this.registerForm.value.cPassword ){
        this.isvalid = true;
      }else{
        this.isvalid = false;
      }
    }
    onCheck(){
      this.user.push(this.registerForm.value);
      this.getSample();
      console.log(this.user);
      // this.route.navigate(['/login']);
      localStorage.setItem('registerFormData',JSON.stringify(this.user))
    }
    getSample(){
      this.sampleService.updateUser(this.user)
    }


}