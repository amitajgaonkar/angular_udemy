import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  appName = this.serverService.getAppName();

  constructor(private serverService: ServerService){}
  onSaveServer(){
    this.serverService.storeServers(this.servers).
    subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onGetServers(){
    this.serverService.getServers().subscribe(
      (servers: any[]) => { this.servers = servers },
      (error) => { console.log(error) }
    );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
