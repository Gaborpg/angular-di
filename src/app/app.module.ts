import { Injector, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerFeatureModule } from './eager-feature/eager-feature.module';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
      //constructor(injector: Injector){
     // console.log("Module:", injector);
    //}
 }
