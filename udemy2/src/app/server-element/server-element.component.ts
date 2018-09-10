import { 
	Component,
	OnInit,
	Input,
	OnChanges, 
	SimpleChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
	OnInit, 
	OnChanges, 
	DoCheck, 
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy {
	@Input('serverElement') element1: {type: string, name:string, content:string};
  constructor() {
		console.log("Constructor called");
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log("ngOnChanges called");
		console.log(changes);
	}

  ngOnInit() {
		console.log("ngOnInit called");
	}
	
	ngDoCheck(){
		console.log("ngDoCheck called");
	}
	
	ngAfterContentInit(){
		console.log("AfterContentInit called");
	}
	
	ngAfterContentChecked(){
		console.log("AfterContentChecked called");
	}
	
	ngAfterViewInit(){
		console.log("AfterViewInit called");
	}
	
	ngAfterViewChecked(){
		console.log("AfterViewChecked called");
	}
	
	ngOnDestroy(){
		console.log("OnDestroy called");
	}

}
