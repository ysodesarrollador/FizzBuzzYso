import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

const fizz = "Fizz";
const buzz = "Buzz";

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  _fbList =  new BehaviorSubject<any[]>([]);
  
  constructor(
    private loadingCtrol?: LoadingController
  ) { }

  async fb(value:number = 100){
    const loading =  this.loadingCtrol.create({
      }); 
      if(value > 100)
        await (await loading).present();      
   
    let multipleOfThree;
    let multipleOfFive;
    let fbList =  [];
    
    for( var i = 1; i < value + 1; i ++){
      let data:any = i;
      multipleOfThree = this.getMultipleOf(i, 3);
      multipleOfFive = this.getMultipleOf(i, 5); 

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
     (await loading).dismiss();
  }
  //return multiplo of arg1
  getMultipleOf(i: number, arg1: number): any {
    return i % arg1 === 0;;
  }

  //get fizzBuzz list
  getfbList(){
    return this._fbList.asObservable();
  }
  
  //clear fizzBuzz list
  clearfbList(){
    return this._fbList.next([]);
  }
}
