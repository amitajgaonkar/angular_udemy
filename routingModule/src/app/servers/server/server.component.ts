import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // const sid = +this.activeRoute.snapshot.params['sid']
    // this.server = this.serversService.getServer(sid);
    // this.activeRoute.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['sid']);
    //   }
    // );
    this.activeRoute.data.subscribe(
      (data:Data)=> {
        this.server = data['serverData'];
      }
    );

  }

  onEditServer(){
    this.router.navigate(['edit'],{relativeTo: this.activeRoute, queryParamsHandling: 'preserve'});
  }
}
