import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public showMenu = false;
  public title = 'Onsen UI - Angular 2 lazy loading!';

  constructor(private _router: Router) {
  }

  public ngOnInit() {
    this.showMenu = true;
  }

  public goTo(menu: any, path: string) {
    this._router.navigate([path]);
    menu.close();
  }

}
