import { Component, OnInit } from '@angular/core';
import {FireBaseService} from './services/firebase.service';
import {Business} from './business';
import {Category} from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FireBaseService]
})
export class AppComponent implements OnInit {
  businesses: Business[];
  categories: Category[];

  appState: string;
  activeKey: string;

  constructor(private _firebaseService: FireBaseService) {
  }

  ngOnInit(){
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key) {
    console.log("Changing state to: " + state)
    if (key) {
      console.log("Changing key to: " + key)
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category){
    this._firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    });
  }

  addBusiness(
    company: string,
    years_in_business: string,
    description: string,
    phone: string,
    email: string,
    street_address: string,
    city: string,
    state: string,
    zipcode: string) {
      var created_at = new Date().toString();

      var newBusiness = {
        company: company,
        years_in_business: years_in_business,
        description: description,
        phone: phone,
        email: email,
        street_address: street_address,
        city: city,
        state: state,
        zipcode: zipcode,
        created_at: created_at
      };

      this._firebaseService.addBusiness(newBusiness);

      // this.changeState('default'); 

  }
}
