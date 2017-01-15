import {
  Component,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';

import {
  CustomNavigation,
} from '../../../custom-navigation/custom-navigation';

import { BazComponent } from '../baz/baz.component';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private _navigator: CustomNavigation,
              private _resolver: ComponentFactoryResolver) {
  }

  public ngOnInit() {
    this._navigator.setResolver(this._resolver);
  }

  public goToBaz() {
    this._navigator.element.pushPage(BazComponent, {
      animation: 'slide',
    }, {});
  }

}
