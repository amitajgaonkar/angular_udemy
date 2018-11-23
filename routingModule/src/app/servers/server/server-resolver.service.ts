import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";
import { Observable } from "rxjs/Observable";

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{

  constructor(private serverService: ServersService){}
  resolve(activeRouterSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Server> | 
          Promise<Server> | Server{
    //Get Async data from another server or ajax data return.
    return this.serverService.getServer(+activeRouterSnapshot.params['sid']);
  }
}