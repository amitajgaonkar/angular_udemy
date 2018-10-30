export class CounterService {
  inActiveCounter: number = 0;
  activeCounter: number = 0;

  incrementActive(){
    this.activeCounter++;
    console.log("InActive to Active Counter: " + this.activeCounter);
  }
  incrementInActive(){
    this.inActiveCounter++;
    console.log("Active to InActive: " + this.inActiveCounter);
  }
}