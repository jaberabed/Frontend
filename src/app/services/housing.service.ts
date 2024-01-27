import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable()
export class HousingService {
  private url: string = "http://localhost:9192/api/city";

  constructor(private http: HttpClient) {}
  getAllCities():Observable<string[]>{
     return this.http.get<string[]>(this.url);
  }
  getAllProperties(sellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(
        data => {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data) {
          console.log(sellRent);

          if (data.hasOwnProperty(id) && data[id].SellRent === sellRent) {
            //console.log(id);
            propertiesArray.push(data[id]);
            //console.log(propertiesArray);
          }
        }
         return propertiesArray;
      })
    );
  }
}
