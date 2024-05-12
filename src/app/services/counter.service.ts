export class CounterService {
    private _count: number = 0;
  
    constructor() {
      console.log('%c CounterService instance', 'color: green');
    }
  
    get count(): number {
      return this._count;
    }
  
    increase(){
      this._count++;
    }
  }