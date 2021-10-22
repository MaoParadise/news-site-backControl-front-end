import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/models/Helpers/Helper';
import { HelperService } from 'src/app/services/authentication/helper.service';
import { SetupService } from 'src/app/services/configuration/setup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data: any;

  helper: Helper = {
    USERNAMEHELPER : '',
    IDHELPERTYPE: 0,
    NAMEHELPER : '',
    LASTNAMEHELPER: '',
    EMAILHELPER: '',
    PASSWORDHELPER: ''
  };

  password: string = '';

  constructor(
    private _setup: SetupService,
    private _helperService: HelperService
  ) { }

  ngOnInit() {
  }

  verifyUser() {
    this._helperService.checkUser(
      this.helper.USERNAMEHELPER,
      this.helper.PASSWORDHELPER,
      true).subscribe(
        (res) => {
          console.log(res);
          this.data = res;
          if(this.data.success){
            this._setup.makeLocalStorage(JSON.stringify(this.data._bodyInfo));
            window.location.href = "/";
          }else{
            window.location.href = "/login"
          }
        },
        (err) => {
          console.log('error');
        })
  }

}
