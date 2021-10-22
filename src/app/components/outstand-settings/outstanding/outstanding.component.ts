import { Component, OnInit } from '@angular/core';
import { ReleaseService } from 'src/app/services/release/release.service';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.css']
})
export class OutstandingComponent implements OnInit {

  data: any;
  dataRelease: any;
  dataOutStanding: any;
  actualPage: number = 1;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
  };

  constructor(
    private _release: ReleaseService
  ) { }

  ngOnInit() {
    this.RefreshReleasesApproved();
    this.RefreshOutStandingReleases();
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
      this.RefreshReleasesApproved();
    }
  }


  RefreshReleasesApproved(){
    this._release.getReleasesForEditorApproved()
    .subscribe(
      (res)=>{
        this.data = res;
        //console.log(this.data)
      },
      (err)=>{
        console.log('error');
      }
    )
  }

  RefreshOutStandingReleases(){
    this._release.getOutStandingReleases().subscribe(
      (res)=>{
        this.dataOutStanding = res;
        //console.log(this.dataOutStanding)
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
           this.RefreshReleasesApproved();
         }
       },
       (err)=>{
         console.log('error');
       }
     ) 
   }

  addOutstanding(Release: any, idOutType: number){
    this._release.addOutstanding(Release.IDRELEASE, idOutType).subscribe(
      (res)=>{
        this.RefreshOutStandingReleases();
      },
      (err)=>{
        console.log('error');
      }
    )
  }


  deleteOutStanding(Release: any, idOutType: number){
    this._release.deleteOutstanding(Release.IDRELEASE, idOutType).subscribe(
      (res)=>{
        this.RefreshOutStandingReleases();
      },
      (err)=>{
        console.log('error');
      }
    )
  }

}
