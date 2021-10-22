import { Component, OnInit } from '@angular/core';
import { ReleaseService } from 'src/app/services/release/release.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-down-release',
  templateUrl: './down-release.component.html',
  styleUrls: ['./down-release.component.css']
})
export class DownReleaseComponent implements OnInit {

  data: any;
  dataRelease: any;

  constructor(
    private _router: Router,
    private _release: ReleaseService
  ) { }

  ngOnInit() {
    this.RefreshMyReleases();
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


  changeStateToDown(Release: any){
   let state = 0;
    if(Release.IDRELEASESTATE == 13){
      state = 10;
    }else if(Release.IDRELEASESTATE == 10 || Release.IDRELEASESTATE == 11 || Release.IDRELEASESTATE == 12){
      state = 13
    }
    this._release.changeStateRelease(state, Release.IDRELEASE).subscribe(
      (res)=>{
        this.dataRelease = res;
        if(this.dataRelease.success == true){
          console.log(this.dataRelease.message);
          this.RefreshMyReleases();
        }
      },
      (err)=>{
        console.log('error');
      }
    ) 
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
