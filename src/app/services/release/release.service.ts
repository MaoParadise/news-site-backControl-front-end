import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SetupService } from '../configuration/setup.service';
import { Release } from 'src/app/models/Release/Release';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  API_URI: string = this._setup.getAPI_URI();

  constructor(
    private http: HttpClient,
    private _setup: SetupService
  ) { }

  addRelease(Release: Release, TITLEAVANCED: string, SINGLETITLE: string){
    return this.http.post(`${this.API_URI}/release/add`,
    {
      IDRELEASESTATE: Release.IDRELEASESTATE,
      IDRELEASETYPE: Release.IDRELEASETYPE[0],
      IDSECTION: Release.IDSECTION[0],
      TITLERELEASE: TITLEAVANCED,
      FIRSTSTATEMENTRELEASE: Release.FIRSTSTATEMENTRELEASE,
      CONTENTRELEASE: Release.CONTENTRELEASE,
      SUBSECTION: Release.SUBSECTION,
      MAINIMAGE: Release.MAINIMAGE,
      SINGLETITLE: SINGLETITLE,
      SINGLEIMG: Release.SINGLEIMG
    });
  }

  editRelease(Release: Release, TITLEAVANCED: string, id: number){
    return this.http.put(`${this.API_URI}/release/edit/${id}`,
    {
      IDRELEASESTATE: Release.IDRELEASESTATE,
      IDRELEASETYPE: Release.IDRELEASETYPE[0],
      IDSECTION: Release.IDSECTION[0],
      TITLERELEASE: TITLEAVANCED,
      FIRSTSTATEMENTRELEASE: Release.FIRSTSTATEMENTRELEASE,
      CONTENTRELEASE: Release.CONTENTRELEASE,
      SUBSECTION: Release.SUBSECTION,
      MAINIMAGE: Release.MAINIMAGE,
      SINGLETITLE: Release.SINGLETITLE,
      SINGLEIMG: Release.SINGLEIMG
    })
  }

  changeStateRelease(state:number, id: number){
    return this.http.put(`${this.API_URI}/release/state/${id}`,
    {
      state
    })
  }


  getMyReleases(){
    return this.http.get(`${this.API_URI}/release/MyReleases`);
  }

  getReleasesForEditor(){
    return this.http.get(`${this.API_URI}/release/ReleasesForEditor`);
  }

  getReleasesForEditorApproved(){
    return this.http.get(`${this.API_URI}/release/ReleasesForEditorApproved`);
  }

  getReleasesForEditorRejected(){
    return this.http.get(`${this.API_URI}/release/ReleasesForEditorRejected`);
  }

  getReleasesForEditorOnRevision(){
    return this.http.get(`${this.API_URI}/release/ReleasesForEditorOnRevision`);
  }

  getReleasesForEditorLike(search: string){
    return this.http.post(`${this.API_URI}/release/ReleasesForEditorLike`,
    {
      search
    });
  }

  getReleaseByTitleAndID(search: string){
    return this.http.post(`${this.API_URI}/release/MyReleasesLike`,
    {
      search
    });
  }
  

  getReleaseByID(id: number){
    return this.http.post(`${this.API_URI}/release/ReleasesByID`,
    {
      id
    });
  }

  getAllSection(){
    return this.http.get(`${this.API_URI}/release/section`);
  }

  getAllType(){
    return this.http.get(`${this.API_URI}/release/type`);
  }
  

  createRelease(){
    return this.http.post(`${this.API_URI}/release/addRecord`, {
    },{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }


  getOutStandingReleases(){
    return this.http.get(`${this.API_URI}/release/getOutstandingReleases`);
  }

  addOutstanding(id:number, outType: number){
    return this.http.post(`${this.API_URI}/release/addOutRecord`,
    {
      id,
      outType
    })
  }

  deleteOutstanding(id:number, outType: number){
    return this.http.post(`${this.API_URI}/release/DeleteOutRecord`,
    {
      id,
      outType
    })
  }

}
