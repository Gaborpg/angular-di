import {Component} from '@angular/core';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { CommonModule } from '@angular/common';
import { CounterService } from '../Services/counter.service';

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
  </div>
</div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    SharedUiModule
  ],
  providers:[CounterService]
})
export class EagerFeatureComponent {}
