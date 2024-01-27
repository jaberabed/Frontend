import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild("Form") addPropertyForm: NgForm;
  constructor(private housingService: HousingService,private router: Router) { }

  ngOnInit() {
    this.housingService.getAllCities().subscribe(data => {
      console.log(data)
    });
  }

  onBack(){
    this.router.navigate(['/']);
  }
  ngSubmit(){
   console.log(this.addPropertyForm);
  }
}
