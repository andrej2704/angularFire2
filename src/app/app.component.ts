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
}
