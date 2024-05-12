import { Component, Injector, inject } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CounterService]
})
export class AppComponent {
  title = 'diAngular';
      //constructor(injector: Injector){
     // console.log("Component:", injector);
    //}
}
