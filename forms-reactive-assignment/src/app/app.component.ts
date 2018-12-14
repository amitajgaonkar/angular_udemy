import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'path';
import { reject } from 'q';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatsForm: FormGroup;
  pStatuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectStatsForm = new FormGroup({
      'pname' : new FormControl(null, Validators.required, this.forbiddenProjectNamesAsync),
      'pmMail' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus' : new FormControl("Stable"),
    });
  }

  onSubmit() {
    console.log(this.projectStatsForm);
  }

  // forbiddenProjectNames(control: FormControl): {[s:string] : boolean} {
  //   if(control.value == 'test'){
  //     return {"fobiddenProjectName" : true};
  //   }
  // }
  forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value == "test") {
          resolve({"fobiddenProjectName" : true})
        }else{
          resolve(null);
        }
      }, 1500);
    });
    
    return promise;
  }
}
