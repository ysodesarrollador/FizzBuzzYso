
import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from 'src/app/services/fizz-buzz.service';

const fizz = "Fizz";
const buzz = "Buzz";
const topNumber = 100;

@Component({
  selector: 'app-fb',
  templateUrl: './fb.page.html',
  styleUrls: ['./fb.page.scss'],
})
export class FbPage implements OnInit {
  fbList:any[] = [];
  msgInfo = "The allow limit is 100";
  entryValue: number = 100;
  msg: boolean;
  
  constructor(
    private fbService: FizzBuzzService
  ) { }
  
  ngOnInit() {
    this.fbService.fb(); 
     this.fbService.getfbList().subscribe(fbList =>{
      this.fbList =  fbList;
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
