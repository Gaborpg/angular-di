import { Injectable } from "@angular/core";

//@Injectable({
//  providedIn: 'root',
//  useFactory: () => {
//    return new CounterService(false)
//  }
//})
export class CounterService {
    private _count: number = 0;
  
    //constructor(private useLog: boolean)
    constructor() {
      console.log('%c CounterService instance', 'color: green');
    }
  
    get count(): number {
      return this._count;
    }
  
    increase(){
      //if (this.useLog)
      //  console.log("Log:", this._count);
      this._count++;
    }
  }