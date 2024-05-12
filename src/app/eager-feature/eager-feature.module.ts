import { CommonModule } from "@angular/common";
import { EagerFeatureComponent } from "./eager-feature.component";
import { SharedUiModule } from "../shared-ui/shared-ui.module";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [EagerFeatureComponent],
    imports: [
      CommonModule,
      SharedUiModule
    ],
    //providers:[CounterService]
  })
  export class EagerFeatureModule {
    //constructor(injector: Injector){
     // console.log("Lazy:", injector);
    //}
   }
  