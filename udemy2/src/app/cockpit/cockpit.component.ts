import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	// serverName = '';
	serverContent = '';
	@Output() serverCreated = new EventEmitter<{name: string, content: string}>();
	@Output('bpCreated') bluePrintCreated = new EventEmitter<{name: string, content: string}>();

  constructor() { }

  ngOnInit() {
	}
	
	onAddServerClick($nameInput: HTMLInputElement) {
		this.serverCreated.emit({
			// name: this.serverName,
			name: $nameInput.value,
			content: this.serverContent,
		});
	}

	onAddBluePrintClick($nameInput: HTMLInputElement) {
		this.bluePrintCreated.emit({
			name: $nameInput.value,
			content: this.serverContent,
		});
	}

}
