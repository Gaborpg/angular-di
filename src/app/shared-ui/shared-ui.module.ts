import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { CardComponent } from './card.component';
import { GrandChildComponent } from './grandchild.component';

@NgModule({
  declarations: [ChildComponent,CardComponent,GrandChildComponent],
  exports: [ChildComponent,CardComponent,GrandChildComponent],
  imports: [CommonModule],
})
export class SharedUiModule {
  constructor(injector: Injector){
    console.log("Shared:", injector);
  }
 }
