import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  serverElement = [];
  serverName = '';
  serverDesc = '';
  onAddServer() {
    this.serverElement.push({
      type: 'server',
      name: this.serverName,
      desc: this.serverDesc,
    });
  }

  onAddBluePrint() {
    this.serverElement.push({
      type: 'blueprint',
      name: this.serverName,
      desc: this.serverDesc,
    });
  }


}
