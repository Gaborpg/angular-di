import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-grandchild',
  template: `
  <div class="card m-2 p-2 border-secondary bg-light">
  <h4 class="card-text text-left text-secondary">GrandChild Component</h4>
  <pre>count: {{ counter.count }}</pre>
  <button class="btn btn-primary btn-sm" 
          (click)="counter.increase()">increase</button>
</div>
  `,
  providers:[CounterService]
})
export class GrandChildComponent {
  constructor(public counter: CounterService) {}
}
