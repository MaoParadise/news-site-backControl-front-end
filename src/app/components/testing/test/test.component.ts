import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/configuration/setup.service';
import { ReleaseService } from 'src/app/services/release/release.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private _setup: SetupService,
    private _release: ReleaseService
  ) { }

  ngOnInit() {
  }

  testLog(){
    this._release.createRelease().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('error');
      })
  }


}
