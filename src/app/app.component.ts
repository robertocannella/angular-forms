import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('email') emailFormControl: any;
  subscription: Subscription;
  answer: string;
  genders = ['male', 'female', 'other'];
  user =  {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted=false;
  suggestUserName() {
    const suggestedName = 'Superuser';

    // RESET ENTIRE FORM:
    //
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'other'
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
 
  // onSubmit(form: NgForm){
  //   this.subscription = form.valueChanges.pipe(map((data:{username:string,email:string,secret:string})=>{
  //     return data.username.toUpperCase();
  //   })).subscribe((data)=>{
  //     console.log(data);
  //   });
  // }
  onSubmit(){
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
  }
  onReset(){
    this.submitted= false;
    this.signupForm.reset();
  }

}
