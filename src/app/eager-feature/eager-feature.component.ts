import {Component, Inject, InjectionToken, Injector, Optional, inject} from '@angular/core';
import { CounterService } from '../services/counter.service';

//{
// provide ===> Key,
// useExisting ==> instraction
// useFactory ==> function instraction
//}
//{
//  provide: CounterService,
//  useClass: CounterService
//}
//const KEY = new InjectionToken("CounterService");
@Component({
  selector: 'app-eager-feature',
  template: `
  <div class="card pt-2 pl-3 m-3 pb-5 border-primary bg-light">
  <h4 class="card-text text-left text-primary">Eager Module</h4>
  <div class="card m-3 pt-2 pl-3 pb-5 border-success">
      <h4 class="card-text text-left text-success">Eager Component</h4>
      <app-card>
          <app-child></app-child>
      </app-card>
      {{counter.count}}
      <button class="btn btn-primary btn-sm" 
      (click)="counter.increase()">increase</button>
  </div>
</div>
  `,
  providers: []
})
export class EagerFeatureComponent {
  //{provide: CounterService, useClass: CounterService}
  inject: Injector = Injector.create({ providers: [], parent: inject(Injector) });
  //counter = inject(CounterService);
  public get counter() {
    return this.inject.get(CounterService)
  }
}
