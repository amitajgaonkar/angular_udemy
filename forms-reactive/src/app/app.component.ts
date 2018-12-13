import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ["Anna", "Pratik", "Sana"];
  regForm: FormGroup;

  ngOnInit(){
    this.regForm = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.regForm);
  }

  onAddHobby(){
    const hobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.regForm.get('hobbies')).push(hobbyControl);
  }

  forbiddenNames (control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'forbiddenName': true};
    }
    return null;
  }

  forbiddenEmails (control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value == "test@test.com") {
          resolve({'emailForbidden': true});
        }
        else{
          resolve(null);
        }
      }, 1500);
    });
    return promise
  }
}
