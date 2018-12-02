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
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: '',
  }
  formSubmit = false;

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
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.question;
    this.user.answer = this.signupForm.value.ans;
    this.user.gender = this.signupForm.value.gender;

    this.formSubmit = true;
    this.signupForm.reset();
  }
}
