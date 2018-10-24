export class CounterService {
  inActiveCounter: number = 0;
  activeCounter: number = 0;

  incrementActive(){
    this.activeCounter++;
    console.log("Active Counter " + this.activeCounter);
  }
  incrementInActive(){
    this.inActiveCounter++;
    console.log("Inactive Counter " + this.inActiveCounter);
  }
}