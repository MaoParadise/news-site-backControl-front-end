import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { SetupService } from 'src/app/services/configuration/setup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  auto: boolean = this._authService.loggeInInformation();
  helper: any;
  nameUser: string = ''; 
  helperTp: number = 0;

  constructor(
    private _authService: AuthenticationService,
    private _setup: SetupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.helper = JSON.parse(this._setup.getLocalUserStorage());
    if(this.helper != null){
      this.nameUser = this.helper._crtU;
      this.helperTp = this.helper._crtTp;
    }
    
  }

  logout(){
    this._authService.logoutUser().subscribe(
      (res)=>{
        this._setup.removeLocalStorage();
        window.location.href = "/";
      },
      (err)=>{
        this._setup.removeLocalStorage();
        window.location.href = "/login";
      }
    )
  }

}
