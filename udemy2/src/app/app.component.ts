import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements = [{type: 'server', name: 'TestServer1', content: 'This is server content!'}];

	onAddServer(serverData:{name: string, content: string}) {
		this.serverElements.push({
			type: 'server',
			name: serverData.name,
			content: serverData.content,
		});
	}

	onAddBluePrint(bluePrintData:{name: string, content: string}) {
		this.serverElements.push({
			type: 'blueprint',
			name:  bluePrintData.name,
			content: bluePrintData.content,
		});
	}
	Destroy() {
		this.serverElements.splice(0,1);
	}

}
