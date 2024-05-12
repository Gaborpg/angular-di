import {Component} from '@angular/core';

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
  providers:[]
})
export class EagerFeatureComponent {}
