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

  constructor(private _firebaseService: FireBaseService) {
  }

  ngOnInit(){
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    })
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
}
