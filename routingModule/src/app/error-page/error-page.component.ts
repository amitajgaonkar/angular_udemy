import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  private errorMessage: string;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage = this.activeRoute.snapshot.data['msg'];
    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['msg'];
      }
    );
  }

}
