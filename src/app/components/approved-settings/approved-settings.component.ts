import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/configuration/setup.service';
import { ReleaseService } from 'src/app/services/release/release.service';

@Component({
  selector: 'app-approved-settings',
  templateUrl: './approved-settings.component.html',
  styleUrls: ['./approved-settings.component.css']
})
export class ApprovedSettingsComponent implements OnInit {

  data: any;
  dataRelease: any;
  actualPage: number = 1;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
  };
  
  constructor(
    private _setup: SetupService,
    private _release: ReleaseService
  ) { }

  ngOnInit() {
    this.RefreshReleasesOnRevision();
  }

  searchQuery: string = '';

  onChangeSearch(){
    if(this.searchQuery != ''){
      this._release.getReleasesForEditorLike(this.searchQuery)
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


  RefreshMyReleases(){
    this._release.getReleasesForEditor()
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  RefreshReleasesApproved(){
    this._release.getReleasesForEditorApproved()
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  RefreshReleasesRejected(){
    this._release.getReleasesForEditorRejected()
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  RefreshReleasesOnRevision(){
    this._release.getReleasesForEditorOnRevision()
    .subscribe(
      (res)=>{
        this.data = res;
      },
      (err)=>{
        console.log('error');
      }
    ) 
  }

  changeStateToDown(Release: any, idstate: number){
    let state = 0;
     if(Release.IDRELEASESTATE == 10 || Release.IDRELEASESTATE == 11 || Release.IDRELEASESTATE == 12){
       state = idstate;
     }
     this._release.changeStateRelease(state, Release.IDRELEASE).subscribe(
       (res)=>{
         this.dataRelease = res;
         if(this.dataRelease.success == true){
           console.log(this.dataRelease.message);
           this.RefreshReleasesOnRevision();
         }
       },
       (err)=>{
         console.log('error');
       }
     ) 
   }

}
