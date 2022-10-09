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
  subscription: Subscription;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form: NgForm){
  //   this.subscription = form.valueChanges.pipe(map((data:{username:string,email:string,secret:string})=>{
  //     return data.username.toUpperCase();
  //   })).subscribe((data)=>{
  //     console.log(data);
  //   });
  // }
  onSubmit(){
    console.log(this.signupForm);
  }

}
