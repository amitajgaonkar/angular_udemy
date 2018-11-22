import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  
  onLoadServers(id: number){
    //After some complex calculation redirect user to another component autimatically
    // this.router.navigate(['/servers', id, 'edit']);
    this.router.navigate(
      ['/servers', id, 'edit'], 
      {
        queryParams: {allowEdit:1}, 
        fragment: "loading",
      }
    );
  }

  onLogIn(){
    this.authService.loggedin();
  }
  onLogOut(){
    this.authService.logedout();
  }
}
