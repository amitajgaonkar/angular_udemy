import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServerStatus = false;
  serverCreated = false;
  serverCreationStatus = "No sever created";
  serverName = '';
  servers = ['Aache Server', 'TomCat Server'];

  constructor() {
    setTimeout(() => {
      this.addServerStatus = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddserver(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server with name "'+ this.serverName +'" was created';
    this.serverCreated = true;
  }

  onInputServerName(event) {
    this.serverName = event.target.value;
  }


}
