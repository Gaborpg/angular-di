import { CommonModule } from "@angular/common";
import { EagerFeatureComponent } from "./eager-feature.component";
import { SharedUiModule } from "../shared-ui/shared-ui.module";
import { RouterModule } from "@angular/router";
import { LazyFeatureComponent } from "../lazy-feature/lazy-feature.component";
import { CounterService } from "../services/counter.service";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [EagerFeatureComponent],
    imports: [
      CommonModule,
      SharedUiModule,
        RouterModule.forChild([
          {path: '', pathMatch: 'full', component: LazyFeatureComponent}
        ])
    ],
    providers:[CounterService]
    
  })
  export class EagerFeatureModule {
    //constructor(injector: Injector){
     // console.log("Lazy:", injector);
    //}
   }
  