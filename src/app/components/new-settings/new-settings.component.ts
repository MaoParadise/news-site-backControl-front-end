import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-settings',
  templateUrl: './new-settings.component.html',
  styleUrls: ['./new-settings.component.css']
})
export class NewSettingsComponent implements OnInit {

  option: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkOption();
  }

  checkOption(){
    this.option = this.activatedRoute.snapshot.params.option;
  }

}
