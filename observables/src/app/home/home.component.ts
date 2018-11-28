import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberSubscription: Subscription;
  customSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000);
    this.numberSubscription = myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First Data');
      }, 2000);
      setTimeout(() => {
        observer.next('Second Data');
      }, 4000);
      setTimeout(() => {
        observer.error('Error Occured');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 7000);
      setTimeout(() => {
        observer.next("third data");
      }, 8000);
      
    });
    this.customSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error:string) => {
        console.log(error);
      },
      () => {
        console.log("Completed");
      },
    );
  }

  ngOnDestroy(){
    this.numberSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
