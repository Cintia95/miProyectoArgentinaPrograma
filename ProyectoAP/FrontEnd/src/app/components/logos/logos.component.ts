import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // if(this.tokenService.getToken()){
    //   this.isLogged = true;
    // }else{
    //   this.isLogged = false;
    // }
  }

  onLogOut():void{
    // this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
