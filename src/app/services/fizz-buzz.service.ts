import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const fizz = "Fizz";
const buzz = "Buzz";

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  private _fbList =  new BehaviorSubject<any[]>([]);
  
  constructor() { }

  fb(value:number = 100){
    let multipleOfThree;
    let multipleOfFive;
    let fbList =  [];
    for( var i = 1; i < value + 1; i ++){
      let data:any = i;
       multipleOfThree = i % 3 === 0;
       multipleOfFive = i % 5 === 0; 
      if(multipleOfThree && multipleOfFive){
        data = fizz + buzz;
      }
      else if(multipleOfThree){
        data = fizz;
      }
      else if(multipleOfFive){
        data = buzz;
      }
      fbList.push(data);
    }
     this._fbList.next(fbList);
  }

  
  getfbList(){
    return this._fbList.asObservable();
  }
  clearfbList(){
    return this._fbList.next([]);
  }
}
