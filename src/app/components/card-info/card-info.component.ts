import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() color: string;
  @Input() title: string;
  @Input() fbList: any[] = [];

  constructor() { }
  
  ngOnInit() {}

}
