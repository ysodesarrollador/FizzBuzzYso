
import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from 'src/app/services/fizz-buzz.service';


//const buzz = "Buzz";
const topNumber = 500;

@Component({
  selector: 'app-fb',
  templateUrl: './fb.page.html',
  styleUrls: ['./fb.page.scss'],
})
export class FbPage implements OnInit {
  readonly fizz = "Fizz";
  readonly buzz ="Buzz";
  readonly fizzBuzz = "Fizz";
  fbList:any[] = [];
  msgInfo = "The allow limit is 500";
  entryValue: number = 100;
  msg: boolean = false;
  fizzList = [];
  buzzList = [];
  fizzBuzzList = [];
  constructor(
    private fbService: FizzBuzzService
  ) { }
  
  ngOnInit() {
    this.fbService.fb(); 
    this.fbService.getfbList().subscribe(fbList =>{
    this.fbList =  fbList;
    this.fizzList = this.fbList.filter(fizz => fizz == "Fizz");
    this.buzzList = this.fbList.filter(fizz => fizz == "Buzz");
    this.fizzBuzzList = this.fbList.filter(fizz => fizz == "FizzBuzz");
    console.log(this.fbList)
    })
  }
  //Apply Fizz Buzz in fb service
  applyFb(){
    if(!this.msg)
      this.fbService.fb(this.entryValue);
  }
  //Clear the fbList
  clear(){
    this.entryValue = null;
    this.fbService.clearfbList();
  }
  //Check input value
  checkValue() {   
    if (this.entryValue > topNumber )
      this.msg = true;
    else
      this.msg = false;
    }
  
}
