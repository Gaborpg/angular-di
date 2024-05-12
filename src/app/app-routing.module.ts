import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerFeatureComponent } from './eager-feature/eager-feature.component';

const routes: Routes = [{
  path: 'eager',
  component: EagerFeatureComponent,
  //providers: [CounterService]
},
{
  path: 'lazy',
  loadChildren: () =>  import('./lazy-feature/lazy-feature.module').then( m => m.LazyFeatureModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
