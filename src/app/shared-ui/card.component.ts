import { Component } from '@angular/core';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-card',
  template: `
  <div class="card p-2 m-2 border-danger bg-light">
  <h4 class="card-text text-left text-danger">Content Component</h4>
  <pre>count: {{ counter.count }}</pre>
  <button class="btn btn-primary btn-sm"
          (click)="counter.increase()">increase</button>
  <ng-content></ng-content>
</div>
`,
providers:[CounterService]
//viewProviders: [CounterService],
})
export class CardComponent {
  constructor(public counter: CounterService) {}
}
