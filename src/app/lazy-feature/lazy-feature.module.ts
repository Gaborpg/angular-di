import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyFeatureComponent } from './lazy-feature.component';
import {RouterModule} from '@angular/router';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { CounterService } from '../services/counter.service';

@NgModule({
  declarations: [LazyFeatureComponent],
  imports: [
    CommonModule,
    SharedUiModule,
      RouterModule.forChild([
        {path: '', pathMatch: 'full', component: LazyFeatureComponent}
      ])
  ],
  providers:[CounterService]
  
})
export class LazyFeatureModule {
  //constructor(injector: Injector){
   // console.log("Lazy:", injector);
  //}
 }
