import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  private sellRent: number = 1;
  properties: Array<IProperty> = [];

  constructor(private housingService: HousingService, private routeActiveRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.routeActiveRoute.snapshot.url.toString()){
      this.sellRent = 2;// just for rent property
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        this.properties = data;
        // console.log(this.properties);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
