import { Component, OnInit } from '@angular/core';
import { Release } from 'src/app/models/Release/Release';
import { ReleaseService } from 'src/app/services/release/release.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-release',
  templateUrl: './add-release.component.html',
  styleUrls: ['./add-release.component.css']
})
export class AddReleaseComponent implements OnInit {
  
  data: any;
  section: any;
  type: any;

  Release: Release = {
    IDRELEASESTATE: 10,
    IDRELEASETYPE: 0,
    IDSECTION: 0,
    TITLERELEASE: '',
    FIRSTSTATEMENTRELEASE: '',
    CONTENTRELEASE: '',
    SUBSECTION: '',
    MAINIMAGE: '',
    SINGLETITLE: '',
    SINGLEIMG: ''
  }
  TITLEAVANCED: string = '';
  SINGLETITLE: string = '';

  
  constructor(
    private _release: ReleaseService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._release.getAllSection().subscribe(
      (res)=>{
        this.section = res;
      },
      (err)=>{
        console.log('error');
      }
    )
    this._release.getAllType().subscribe(
      (res)=>{
        this.type = res;
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  addRelease(){
    this.SINGLETITLE = this.Release.TITLERELEASE;
    this.TITLEAVANCED = document.getElementById('preView').innerHTML;
    if(this.Release.IDRELEASETYPE != 0 &&
      this.Release.IDSECTION != 0 &&
      this.Release.TITLERELEASE != '' &&
      this.SINGLETITLE != '' &&
      this.Release.FIRSTSTATEMENTRELEASE != '' &&
      this.Release.CONTENTRELEASE != '' &&
      this.Release.MAINIMAGE != '' &&
      this.Release.SINGLEIMG != ''){
        this._release.addRelease(this.Release, this.TITLEAVANCED, this.SINGLETITLE)
        .subscribe(
          (res)=>{
            console.log(res);
            this.data = res;
            if(this.data.success == true){
              console.log(this.data.message);
              this._router.navigate(['/']);
            }
          },
          (err)=>{
            console.log('error');
          }
        ) 
    }else{
      console.log('Faltan campos para rellenar')
    }   
  }


}
