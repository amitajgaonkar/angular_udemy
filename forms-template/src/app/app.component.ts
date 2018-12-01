import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('regForm') signupForm: NgForm;
  defaultUserName = "AmitAjgaonkar";
  defaultQuestion = "teacher";
  answer = "";
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData : {
    //     username : suggestedName,
    //     email: 'test@gmail.com',
    //   },
    //   question: 'pet',
    //   ans: "Test answer",
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });


  }

  // onSubmit(regForm: NgForm){
  //   console.log(regForm)
  // }
  onSubmit(){
    console.log(this.signupForm)
  }
}
