import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReleaseService } from 'src/app/services/release/release.service';
import { Release } from 'src/app/models/Release/Release';

@Component({
  selector: 'app-edit-release',
  templateUrl: './edit-release.component.html',
  styleUrls: ['./edit-release.component.css']
})
export class EditReleaseComponent implements OnInit {

  edit: boolean = true;
  data: any;
  dataRelease: any;
  section: any;
  type: any;


  RELEASEID: number = 0;
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


  constructor(
    private _router: Router,
    private _release: ReleaseService
  ) { }

  ngOnInit() {
    this.RefreshMyReleases();
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

  RefreshMyReleases(){
    this._release.getMyReleases()
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  getOneRelease(id: number){
    this.edit = false;
    this.RELEASEID = id;
    this._release.getReleaseByID(this.RELEASEID)
    .subscribe(
      (res)=>{
        this.dataRelease = res;
        this.Release.IDRELEASESTATE = 10;
        this.Release.IDRELEASETYPE = this.dataRelease[0].IDRELEASETYPE;
        this.Release.IDSECTION = this.dataRelease[0].IDSECTION;
        this.Release.MAINIMAGE = this.dataRelease[0].MAINIMAGE;
        this.Release.SUBSECTION = this.dataRelease[0].SUBSECTION;
        this.Release.SINGLETITLE = this.dataRelease[0].SINGLETITLE;
        this.Release.SINGLEIMG = this.dataRelease[0].SINGLEIMG;
        this.Release.FIRSTSTATEMENTRELEASE =  this.dataRelease[0].FIRSTSTATEMENTRELEASE;
        this.Release.CONTENTRELEASE = this.dataRelease[0].CONTENTRELEASE;
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  editRelease(){
    this.TITLEAVANCED = document.getElementById('preView').innerHTML;
    if(this.Release.IDRELEASETYPE != 0 &&
      this.Release.IDSECTION != 0 &&
      this.Release.SINGLETITLE != '' &&
      this.Release.FIRSTSTATEMENTRELEASE != '' &&
      this.Release.CONTENTRELEASE != '' &&
      this.Release.MAINIMAGE != '' &&
      this.Release.SINGLEIMG != ''){
        this._release.editRelease(this.Release, this.TITLEAVANCED, this.RELEASEID)
        .subscribe(
          (res)=>{
            this.data = res;
            if(this.data.success == true){
              console.log(this.data.message);
              this.backEdit();
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


  backEdit(){
    this.RefreshMyReleases();
    this.edit = true;
  }



  searchQuery: string = '';

  onChangeSearch(){
    if(this.searchQuery != ''){
      this._release.getReleaseByTitleAndID(this.searchQuery)
      .subscribe(
        (res)=>{
          this.data = res;
        },
        (err)=>{
          console.log('error');
        }
      )
    }else{
      this.RefreshMyReleases();
    }
  }

}
