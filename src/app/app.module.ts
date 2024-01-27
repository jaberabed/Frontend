import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent} from './property/property-card/property-card.component';
import { PropertyListComponent} from './property/property-list/property-list.component';
import { AddPropertyComponent} from './property/add-property/add-property.component';
import { HousingService } from './services/housing.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PageNotFoundComponent } from './property/page-not-found/page-not-found.component';
import { UserLoginComponent} from './user/user-login/user-login.component';
import { UserRegisterComponent} from './user/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRouters: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-Property', component: PropertyListComponent},
  {path: 'add-Property', component: AddPropertyComponent},
  {path: 'property-Detail/:id', component: PropertyDetailComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyListComponent,
      AddPropertyComponent,
      PageNotFoundComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters),

  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
