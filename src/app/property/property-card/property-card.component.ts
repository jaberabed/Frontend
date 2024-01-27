import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent  {
  @Input() property : IProperty;

  constructor() { }

  ngOnInit() {
    //  console.log(this.property) //test if I can see the list for page load
  }
}
