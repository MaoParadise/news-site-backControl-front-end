import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/models/Helpers/Helper';
import { HelperService } from 'src/app/services/authentication/helper.service';
import { SetupService } from 'src/app/services/configuration/setup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: any;

  helper: Helper = {
    USERNAMEHELPER: '',
    IDHELPERTYPE: 2,
    NAMEHELPER: '',
    LASTNAMEHELPER: '',
    EMAILHELPER: '',
    PASSWORDHELPER: ''
  };

  rePassword: string = '';

  constructor(
    private _setup: SetupService,
    private _helperService: HelperService
    ){}

  ngOnInit() {
  }

  registerLocalHelper() {
    this._helperService.createHelper(
      this.helper.USERNAMEHELPER,
      this.helper.NAMEHELPER,
      this.helper.LASTNAMEHELPER,
      this.helper.EMAILHELPER,
      this.helper.PASSWORDHELPER)
      .subscribe(
        (res) => {
          console.log(res);
          this.data = res;
          if(this.data.success){
            this._setup.makeLocalStorage(JSON.stringify(this.data._bodyInfo));
            window.location.href = "/";
          }else{
            window.location.href = "/register"
          }
        },
        (err) => {
          console.log('error');
        })
  }


  registerLocalUser(){
    console.log(this.helper);
  }
}
