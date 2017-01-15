import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  OnDestroy,
  ReflectiveInjector,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {Params} from 'angular2-onsenui';
declare var ons;

@Directive({
  selector: 'ons-navigator',
})
export class CustomNavigation implements OnDestroy {
  private _lastPageLoader: Function;

  /**
   * @input page
   * @type {Type<any>}
   * @desc
   *   [en]Type of the page component.[/en]
   *   [ja]ページコンポーネントのクラスを指定します。[/ja]
   */
  @Input('page') set pageComponentType(page: Type<any>) {
    if (this.element.pages.length === 0) {
      this.element.pushPage(page);
    }
  }

  get element(): any {
    return this._elementRef.nativeElement;
  }

  constructor(
    private _elementRef: ElementRef,
    private _resolver: ComponentFactoryResolver,
    private _viewContainer: ViewContainerRef,
    private _injector: Injector) {
    this._lastPageLoader = this.element.pageLoader;
    this.element.pageLoader = this._createPageLoader();
  }

  public setResolver(resolver: ComponentFactoryResolver) {
    this._resolver = resolver;
  }

  public _createPageLoader(): any {
    const componentRefMap: WeakMap<HTMLElement, ComponentRef<any>> =
    new WeakMap<HTMLElement, ComponentRef<any>>();
    return new ons.PageLoader(
      ({page, parent, params}, done: Function) => {
        const pageParams = new Params(params || {});
        const injector = ReflectiveInjector.resolveAndCreate([
          {provide: Params, useValue: pageParams},
          {provide: CustomNavigation, useValue: this},
        ], this._injector);

        const factory = this._resolver.resolveComponentFactory(page);
        const selector = 'ons-navigator';
        const pageComponentRef = factory.create(injector, null);
        this._viewContainer.insert(pageComponentRef.hostView);
        const pageElement = pageComponentRef.location.nativeElement;
        componentRefMap.set(pageElement, pageComponentRef);

        // dirty fix to insert in correct position
        this.element.appendChild(pageElement);

        done(pageElement);
      },
      (element) => {
        if (componentRefMap.has(element)) {
          componentRefMap.get(element).destroy();
          componentRefMap.delete(element);
        }
      },
    );

  }

  public ngOnDestroy() {
    this.element.pageLoader = this._lastPageLoader;
  }

}
